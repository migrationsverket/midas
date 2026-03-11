import{j as e}from"./iframe-CmqPL-ve.js";import{$ as c}from"./Form-UFmVR2TZ.js";import{G as d}from"./Grid-DpsPo9PY.js";import{G as i}from"./GridItem-2IaYT3ie.js";import{a as x,R as u}from"./Radio-Dbs3mApw.js";import{C as I}from"./CheckboxGroup-BSCESG1U.js";import{C as G}from"./Checkbox-D3Nek3ID.js";import{T as t}from"./TextField-BnZ4IcO4.js";import{S as l}from"./Select-Kt1LzfRc.js";import{L as p}from"./ListBoxItem-BYOt-IhJ.js";import{B as a}from"./Button-M655P-gZ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-SAP-OCBT.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DGYf2tyw.js";import"./useFocusRing-C_UBzR4Z.js";import"./index-D6miHDB-.js";import"./index-BBGo7RoQ.js";import"./clsx-Ciqy0D92.js";import"./Group-BVRVYyWF.js";import"./FieldError-6cTdJ_Za.js";import"./Text-DLxMYZ1_.js";import"./Text-9ERWHN0X.js";import"./Button-9NJzBnLU.js";import"./Hidden-C_mQN8s6.js";import"./useLabels-Bi-sZgxK.js";import"./useButton-CQub_DYW.js";import"./SelectionIndicator-D2u8hlxM.js";import"./useField-CWYy_yBm.js";import"./VisuallyHidden-DSb_BfCD.js";import"./useControlledState-DSdzAD24.js";import"./Label-DTYKLJxN.js";import"./Dialog-CfXx2jdx.js";import"./RSPContexts-DTDiXTQC.js";import"./OverlayArrow-CK7-NbF3.js";import"./useResizeObserver-tlSJCFh2.js";import"./Collection-CbwnshHz.js";import"./index-CcIX9qGq.js";import"./Separator-C_s5EcvH.js";import"./SelectionManager-K9TuEgi2.js";import"./useEvent-BjnpXFvw.js";import"./scrollIntoView-BTl5uiXp.js";import"./useDescription-Sr7ZTB4e.js";import"./ListKeyboardDelegate-IMmnH6-v.js";import"./PressResponder-BStAFXGT.js";import"./useLocalizedStringFormatter-B-4EZhTm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B8hJp2sM.js";import"./getScrollParent-B2JBaajl.js";import"./x-B30kXvjA.js";import"./createLucideIcon-s6c-d0_0.js";import"./useLocalizedStringFormatter-BKe91JX1.js";import"./Heading-DirSBg-B.js";import"./info-C8ko8gSe.js";import"./Popover-t8i18mpV.js";import"./check-BMjJeobE.js";import"./useToggleState-DQvz6tXW.js";import"./TextFieldBase-DGYOgve2.js";import"./Input-BMVQCdA_.js";import"./useTextField--OhJxVk7.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-S8ylDscB.js";import"./DragAndDrop-7VxzmNUl.js";import"./inertValue-lZbdQwVl.js";import"./useListState-BkB37Eai.js";import"./TagGroup-cRt4GOtk.js";import"./useHighlightSelectionDescription-COSPHx3u.js";import"./useUpdateEffect-dE-F4AkK.js";import"./useHasTabbableChild-CvEOtLO0.js";import"./chevron-down-B39mpMT5.js";import"./Virtualizer-lVb0ayKr.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' items={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
            {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
          </Select>
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' items={ITEMS.map(i => ({
            name: i,
            id: i
          }))}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
