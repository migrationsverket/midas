import{j as e}from"./iframe-Bj8DUbD9.js";import{$ as c}from"./Form-D0Ugz0bB.js";import{G as d}from"./Grid-CrF_FPmt.js";import{G as i}from"./GridItem-E4cF_WVE.js";import{a as x,R as u}from"./Radio-BmWPxU_d.js";import{C as I}from"./CheckboxGroup-BOaddgi1.js";import{C as G}from"./Checkbox-CLUV-Gfu.js";import{T as t}from"./TextField-Cd9-C3AO.js";import{S as l}from"./Select-C4qXShIf.js";import{L as p}from"./ListBoxItem-BY_wsVOc.js";import{B as a}from"./Button-Cmlv3L41.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-ZO4yOhXK.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D4KwHiGL.js";import"./useFocusRing-JSDzquTf.js";import"./index-z9FA-6qc.js";import"./index-BheBXkbs.js";import"./clsx-Ciqy0D92.js";import"./Group-VklwlUcd.js";import"./FieldError-D0YXHKSR.js";import"./Text-sbFHWdQM.js";import"./Text-BT7-HsIw.js";import"./Button-BF7jf_Ur.js";import"./Hidden-D5KISXrR.js";import"./useLabels-MzyfVlFc.js";import"./useButton-DViiPWBR.js";import"./SelectionIndicator-C0jNY1hm.js";import"./useField-ag9vEqi7.js";import"./VisuallyHidden-CHpwvWxj.js";import"./useControlledState-o6yOdn5X.js";import"./Label-BkaAnjNx.js";import"./Dialog-D8awK9VJ.js";import"./RSPContexts-DDd4UCxF.js";import"./OverlayArrow-D0j7aBB6.js";import"./useResizeObserver-Bd6XHY1K.js";import"./Collection-BPF05rQA.js";import"./index-CtLrQJlI.js";import"./Separator-3daChmw5.js";import"./SelectionManager-Csm6B-vw.js";import"./useEvent-CXLssXy0.js";import"./scrollIntoView-Cyg4d7Wf.js";import"./useDescription-BprtaOQi.js";import"./ListKeyboardDelegate-G0c0-2Di.js";import"./PressResponder-CW-OlPRb.js";import"./useLocalizedStringFormatter-BYlnSABI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bs64OQR9.js";import"./getScrollParent-DD_GG-02.js";import"./x-Dg59dYX4.js";import"./createLucideIcon-D8pz04BM.js";import"./useLocalizedStringFormatter-DH047og8.js";import"./Heading-Dh5hcPFl.js";import"./info-Qp74svrK.js";import"./Popover-BweEmV_e.js";import"./check-Df42ndD8.js";import"./useToggleState-DHAMQgUE.js";import"./TextFieldBase-uy9_CkhF.js";import"./Input-C9TSnnGC.js";import"./useTextField-e-4r-eRY.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CVlfMdK_.js";import"./DragAndDrop-DpxZTsdD.js";import"./inertValue-DrSPY1xe.js";import"./useListState-CE8xWg9P.js";import"./TagGroup-C3rlTV90.js";import"./useGridListItem-CMvNFBwA.js";import"./useHighlightSelectionDescription-BfmvnWom.js";import"./useUpdateEffect-Be_dOkEG.js";import"./useHasTabbableChild-4amnQqWh.js";import"./chevron-down-Clyaom5k.js";import"./Virtualizer-BJnGJ8Dq.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const ye=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,ye as __namedExportsOrder,Le as default};
