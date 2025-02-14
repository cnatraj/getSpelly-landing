<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <!-- <v-card>
          <v-card-title>Page Details</v-card-title>
          <v-card-text>
            <v-text-field label="Slug" density="compact"> </v-text-field>
            <v-text-field label="title" density="compact"> </v-text-field>
            <v-text-field label="description" density="compact"> </v-text-field>
          </v-card-text>
        </v-card> -->
        <div v-for="(section, index) in content" :key="index" class="mt-4">
          <v-card outlined>
            <v-card-title>
              <v-icon
                icon="mdi-minus-box"
                @click="removeSection(index)"
              ></v-icon>
              {{ section.name }}
            </v-card-title>
            <v-card-item>
              <v-text-field
                v-model="section.fields.heading"
                label="Heading"
                density="compact"
                variant="outlined"
              ></v-text-field>

              <v-text-field
                v-if="section.name === 'section'"
                v-model="section.fields.text"
                label="Text"
                density="compact"
                variant="outlined"
              ></v-text-field>

              <div v-if="section.name === 'faq'">
                <div>
                  <v-icon
                    icon="mdi-plus-box"
                    @click="addFaqItem(index)"
                  ></v-icon>
                  Add FAQ Item
                </div>
                <div
                  v-for="(item, i) in section.fields.items"
                  :key="i"
                  class="mt-2"
                >
                  <v-text-field
                    v-model="item.question"
                    label="Question"
                    density="compact"
                    variant="outlined"
                    prepend-icon="mdi-minus-box"
                    @click:prepend="removeFaqItem(index, i)"
                  ></v-text-field>
                  <v-text-field
                    v-model="item.answer"
                    label="Answer"
                    density="compact"
                    variant="outlined"
                    prepend-icon="mdi-blank-space"
                  ></v-text-field>
                </div>
              </div>

              <div v-if="section.name === 'list'">
                <div>
                  <v-icon
                    icon="mdi-plus-box"
                    @click="addListItem(index)"
                  ></v-icon>
                  Add List Item
                </div>

                <div
                  v-for="(item, i) in section.fields.items"
                  :key="i"
                  class="mt-2"
                >
                  <v-text-field
                    v-model="section.fields.items[i]"
                    label="List Item"
                    density="compact"
                    variant="outlined"
                    prepend-icon="mdi-minus-box"
                    @click:prepend="removeListItem(index, i)"
                  ></v-text-field>
                </div>
                <v-text-field
                  v-model="section.fields.link.text"
                  label="Link Text"
                  density="compact"
                  variant="outlined"
                ></v-text-field>
                <v-text-field
                  v-model="section.fields.link.url"
                  label="Link URL"
                  density="compact"
                  variant="outlined"
                ></v-text-field>
              </div>
            </v-card-item>
            <v-card-actions></v-card-actions>
          </v-card>
        </div>

        <v-card>
          <v-card-actions>
            <v-select
              v-model="selectedSection"
              :items="sections"
              label="Section Type"
              item-title="name"
              item-value="name"
              density="compact"
            ></v-select>
            <v-btn @click="addSection">[+] Add Section</v-btn>
          </v-card-actions>
        </v-card>

        <v-card>
          <v-card-item>
            <v-checkbox v-model="addSpellyPlug" label="Spelly Plug">
            </v-checkbox>
            <div v-if="addSpellyPlug">
              <v-text-field
                v-model="spellyPlug.heading"
                label="Heading"
                density="compact"
                variant="outlined"
              ></v-text-field>
              <v-textarea
                v-model="spellyPlug.text"
                label="Text"
                density="compact"
                variant="outlined"
              ></v-textarea>
              <v-text-field
                v-model="spellyPlug.cta_button.text"
                label="Link Text"
                density="compact"
                variant="outlined"
              ></v-text-field>
              <v-text-field
                v-model="spellyPlug.cta_button.link"
                label="Link URL"
                density="compact"
                variant="outlined"
              ></v-text-field>
            </div>
          </v-card-item>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card>
          <v-card-title
            >JSON Output
            <v-btn size="small" @click="copyToClipboard">Click to copy</v-btn>
          </v-card-title>
          <v-card-text>
            <pre>{{ jsonOutput }}</pre>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";

const sections = ref([
  { name: "section", fields: { heading: "", text: "" } },
  {
    name: "list",
    fields: { heading: "", items: [], link: { text: "", url: "" } },
  },
  { name: "faq", fields: { heading: "", items: [] } },
]);
const spellyPlug = ref({
  heading: "",
  text: "",
  cta_button: { text: "", link: "" },
});

const content = ref([]);
const selectedSection = ref(null);
const addSpellyPlug = ref(false);

const addSection = () => {
  const sectionTemplate = sections.value.find(
    (s) => s.name === selectedSection.value
  );
  if (sectionTemplate) {
    content.value.push(JSON.parse(JSON.stringify(sectionTemplate))); // Deep copy
  }
};

const removeSection = (index) => {
  content.value.splice(index, 1);
};

const addFaqItem = (index) => {
  content.value[index].fields.items.push({ question: "", answer: "" });
};

const removeFaqItem = (sectionIndex, itemIndex) => {
  content.value[sectionIndex].fields.items.splice(itemIndex, 1);
};

const addListItem = (index) => {
  content.value[index].fields.items.push("");
};

const removeListItem = (sectionIndex, itemIndex) => {
  content.value[sectionIndex].fields.items.splice(itemIndex, 1);
};

const jsonOutput = computed(() => {
  const obj = {
    sections: content.value.map(({ name, fields }) => ({ name, ...fields })),
  };
  if (addSpellyPlug.value) {
    obj.spellyPlug = spellyPlug.value;
  }
  return JSON.stringify(obj, null, 2);
});

const copyToClipboard = () => {
  navigator.clipboard.writeText(jsonOutput.value).then(() => {
    alert("Copied to clipboard!");
  });
};
</script>
