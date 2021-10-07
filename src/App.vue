<script>
import { ref, watch } from "vue"
import {
  TransitionRoot,
  TransitionChild,
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Dialog,
  DialogOverlay,
  DialogTitle
} from '@headlessui/vue'
import { CheckIcon, SelectorIcon, XIcon } from '@heroicons/vue/solid'
import { useDropzone } from 'vue3-dropzone'
import { saveAs } from 'file-saver'

const _matrix = {
  version: 1,
  tactics: [
    {
      id: "T01",
      short_name: "Tactic 1",
      techniques: [
        "T01.01",
        "T01.02",
        "T01.03",
        "T01.04"
      ]
    },
    {
      id: "T02",
      short_name: "Tactic 2",
      techniques: [
        "T02.01",
        "T02.02",
        "T02.03",
        "T02.04"
      ]
    },
    {
      id: "T03",
      short_name: "Tactic 3",
      techniques: [
        "T03.01",
        "T03.02",
        "T03.03",
        "T03.04"
      ]
    },
    {
      id: "T04",
      short_name: "Tactic 4",
      techniques: [
        "T04.01",
        "T04.02",
        "T04.03",
        "T04.04"
      ]
    }
  ],
  techniques: [
    {
      id: "T01.01",
      short_name: "Tech 01.01",
      color: "bg-white"
    },
    {
      id: "T01.02",
      short_name: "Tech 01.02",
      color: "bg-white"
    },
    {
      id: "T01.03",
      short_name: "Tech 01.03",
      color: "bg-white"
    },
    {
      id: "T01.04",
      short_name: "Tech 01.04",
      color: "bg-white"
    },
    {
      id: "T02.01",
      short_name: "Tech 02.01",
      color: "bg-white"
    },
    {
      id: "T02.02",
      short_name: "Tech 02.02",
      color: "bg-white"
    },
    {
      id: "T02.03",
      short_name: "Tech 02.03",
      color: "bg-white"
    },
    {
      id: "T02.04",
      short_name: "Tech 02.04",
      color: "bg-white"
    },
    {
      id: "T03.01",
      short_name: "Tech 03.01",
      color: "bg-white"
    },
    {
      id: "T03.02",
      short_name: "Tech 03.02",
      color: "bg-white"
    },
    {
      id: "T03.03",
      short_name: "Tech 03.03",
      color: "bg-white"
    },
    {
      id: "T03.04",
      short_name: "Tech 03.04",
      color: "bg-white"
    },
    {
      id: "T04.01",
      short_name: "Tech 04.01",
      color: "bg-white"
    },
    {
      id: "T04.02",
      short_name: "Tech 04.02",
      color: "bg-white"
    },
    {
      id: "T04.03",
      short_name: "Tech 04.03",
      color: "bg-white"
    },
    {
      id: "T04.04",
      short_name: "Tech 04.04",
      color: "bg-white"
    }
  ]
}

const colors = [
  {
    label: "White",
    value: "bg-white"
  },
  {
    label: "Light Gray",
    value: "bg-gray-100"
  },
  {
    label: "Heavy Gray",
    value: "bg-gray-300"
  },
  {
    label: "Light Green",
    value: "bg-green-100"
  },
  {
    label: "Heavy Green",
    value: "bg-green-300"
  },
  {
    label: "Light Red",
    value: "bg-red-100"
  },
  {
    label: "Heavy Red",
    value: "bg-red-300"
  }
]

export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    CheckIcon,
    SelectorIcon,
    XIcon,
    Dialog,
    DialogOverlay,
    DialogTitle
  },

  setup() {
    const matrix = ref(_matrix)
    const activeTechiqueId = ref(null)
    
    const activeTechniqueColor = ref("bg-white")
    watch (activeTechniqueColor, (color, prevColor) => {
      if (activeTechiqueId.value) {
        matrix.value.techniques.find(el => el.id === activeTechiqueId.value).color = color
      }
    })
    
    const activeTechique = ref(null)
    const setActiveTechique = (id) => {
      isTechniqueDialogVisible.value = true
      activeTechiqueId.value = id
      activeTechique.value = matrix.value.techniques.find(el => el.id === id)
    }

    const isTechniqueDialogVisible = ref(false)

    const saveTechnique = () => {
      const el = matrix.value.techniques.find(el => el.id === activeTechiqueId.value)
      el.comment = activeTechique.value.comment
      el.intruder = parseInt(activeTechique.value.intruder)
      el.protect = parseInt(activeTechique.value.protect)
      el.detect = parseInt(activeTechique.value.detect)
    }

    // Load & save
    const isOpen = ref(false);
    const closeModal = () => {
      isOpen.value = false
    }
    const openModal = () => {
      isOpen.value = true
    }
    let sourceJSONFile;
    const onDrop = (acceptFiles, rejectReasons) => {
      sourceJSONFile = acceptFiles[0]
      console.log(acceptFiles)
      console.log(rejectReasons)
    }
    const { getRootProps, getInputProps, ...rest } = useDropzone({ onDrop })
    const loadJSON = () => {
      let reader = new FileReader();
      reader.onload = event => matrix.value = JSON.parse(event.target.result)
      reader.onerror = error => console.log(error)
      reader.readAsText(sourceJSONFile)
      closeModal()
    }
    const saveJSON = () => {
      let blob = new Blob([JSON.stringify(matrix.value)], {type: "application/json;charset=utf-8"})
      saveAs(blob, "matrix.json")
    }
    
    return {
      matrix,
      activeTechiqueId,
      activeTechique,
      setActiveTechique,
      saveTechnique,
      isTechniqueDialogVisible,
      activeTechniqueColor,
      colors,
      isOpen,
      closeModal,
      openModal,
      loadJSON,
      saveJSON,
      getRootProps,
      getInputProps,
      ...rest
    }
  },
}
</script>

<template>
  <div>
    <!-- Actions -->
    <div class="absolute h-10 right-2 top-1 text-sm">
      <div class="flex items-center">
        <div class="py-1 px-2 rounded hover:bg-gray-100 cursor-pointer" type="button" @click="openModal">Load</div>
        <div class="py-1 px-2 rounded hover:bg-gray-100 cursor-pointer" type="button" @click="saveJSON()">Save</div>
      </div>
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal">
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="min-h-screen px-4 text-center">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <DialogOverlay class="fixed inset-0" />
            </TransitionChild>

            <span class="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>

            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <div
                class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  Load JSON-data
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    Choose json-file to load your data to application.
                  </p>
                </div>

                <div class="h-32 bg-gray-100 border rounded-lg my-4 flex items-center justify-center text-xs">
                  <div v-bind="getRootProps()">
                    <input v-bind="getInputProps()" >
                    <p v-if="isDragActive">Drop the files here ...</p>
                    <p v-else class="cursor-pointer">Drag 'n' drop some files here, or click to select files</p>
                  </div>
                </div>

                <div class="mt-4">
                  <button
                    type="button"
                    class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    @click="loadJSON()"
                  >
                    Load it!
                  </button>
                </div>
              </div>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- Technique editor -->
    <div v-if="isTechniqueDialogVisible" class="absolute bg-gray-50 w-96 border-l inset-y-0 right-0 shadow-lg overflow-auto">
      <div class="h-16 w-full bg-gray-100 flex justify-between items-center pr-1 pl-4">
        <div>
          <button
            type="button"
            class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            @click="saveTechnique()"
          >
            Save it!
          </button>
        </div>
        <div @click="isTechniqueDialogVisible = false" class="cursor-pointer h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-200">
          <XIcon class="w-5 h-5" aria-hidden="true" />
        </div>
      </div>
      <div v-if="activeTechiqueId" class="p-4">
        <div>{{ activeTechiqueId }}</div>

        <!-- Color chooser -->
        <!-- ---------------------------------------------- -->
        <Listbox v-model="activeTechniqueColor">
          <div class="relative mt-1">
            <ListboxButton class="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
              <span class="block truncate">{{ colors.find(el => el.value === activeTechniqueColor).label }}</span>
              <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
              </span>
            </ListboxButton>
            <transition
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <ListboxOption
                  v-slot="{ active, selected }"
                  v-for="color in colors"
                  :key="color.value"
                  :value="color.value"
                  as="template"
                >
                  <li
                    :class="[
                      active ? 'text-amber-900 bg-amber-100' : 'text-gray-900',
                      'cursor-default select-none relative py-2 pl-10 pr-4',
                      color.value
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-medium' : 'font-normal',
                        'block truncate',
                      ]"
                      >{{ color.label }}</span
                    >
                    <span
                      v-if="selected"
                      class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                    >
                      <CheckIcon class="w-5 h-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>

        <!-- Desription -->
        <section class="my-4 space-y-2">
          <header class="text-xs font-bold uppercase text-gray-400">Описание</header>
          <div class="text-sm">{{ activeTechique.name }}</div>
        </section>
        <section class="my-4 space-y-2" v-if="activeTechique.examples.length > 0">
          <header class="text-xs font-bold uppercase text-gray-400">Примеры</header>
          <ul class="text-sm list-disc ml-4">
            <li v-for="example in activeTechique.examples" :key="example.id">{{ example.content }}</li>
          </ul>
        </section>
        <section class="my-4 space-y-2">
          <label class="block">
            <span class="text-gray-700">Comments</span>
            <textarea class="
                mt-1
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
              " rows="3" v-model="activeTechique.comment"></textarea>
          </label>
        </section>
        <section class="my-4 space-y-2">
          <label class="block">
            <span class="text-gray-700">Нарушитель</span>
            <input type="text" class="
                mt-1
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
              " placeholder="" v-model="activeTechique.intruder">
          </label>
        </section>
        <section class="my-4 space-y-2">
          <label class="block">
            <span class="text-gray-700">Защита</span>
            <input type="text" class="
                mt-1
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
              " placeholder="" v-model="activeTechique.protect">
          </label>
        </section>
        <section class="my-4 space-y-2">
          <label class="block">
            <span class="text-gray-700">Обнаружение</span>
            <input type="text" class="
                mt-1
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
              " placeholder="" v-model="activeTechique.detect">
          </label>
        </section>
      </div>
    </div>
    
    <!-- Matrix -->
    <div class="flex space-x-1 text-xs p-4 pb-32 w-screen h-screen overflow-auto">
      <div v-for="tactic in matrix.tactics" :key="tactic.id" class="w-40">
        <div>
          <header class="h-16 border-b">
            <div class="font-bold">{{ tactic.id }}</div>
            <div class="pr-8">{{ tactic.short_name }}</div>
          </header>
          <div class="space-y-1 mt-1">
            <div v-for="tech in matrix.techniques" :key="tech.id">
              <div v-if="tactic.techniques.includes(tech.id)" class="border p-2 cursor-pointer hover:bg-gray-100 h-10" :class="[tech.color, tech.id === activeTechiqueId ? 'border-gray-900' : '']" @click="setActiveTechique(tech.id)">
                <div class="flex justify-between">
                  <div>{{ tech.id }}</div>
                  <div class="flex items-center space-x-1">
                    <div v-if="parseInt(tech.intruder) !== 0">H{{ tech.intruder }}</div>
                    <div v-if="parseInt(tech.protect) !== 0">P{{ tech.protect }}</div>
                    <div v-if="parseInt(tech.detect) !== 0">D{{ tech.detect }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
