import{j as e}from"./iframe-cBPiYa1j.js";import{$ as c}from"./Form-SVjqc9Qj.js";import{G as d}from"./Grid-BQ5EAr_I.js";import{G as i}from"./GridItem-XB0WGa6U.js";import{T as t}from"./TextField-D1Sx0jsA.js";import{S as l}from"./Select-iDYOWWsu.js";import{B as a}from"./Button-DLE1YCfG.js";import{R as x,a as u}from"./Radio-T_vlS3Jm.js";import{C as I}from"./CheckboxGroup-CEfSwtwI.js";import{C as G}from"./Checkbox-JIHrqfVJ.js";import{L as p}from"./ListBoxItem-Cdplh2Xw.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BsI1IeI-.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CjoRhxJO.js";import"./useFocusRing-C3NoufTF.js";import"./index-D3tkVpzv.js";import"./index-DfcTzlFO.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BxCOlQNE.js";import"./TextField-DnKwHG_z.js";import"./FieldError-BxRdx_yQ.js";import"./Text-C9cmeUrC.js";import"./Text-D5vIYSns.js";import"./RSPContexts-BVzQNN1V.js";import"./Group-B5w7qtGV.js";import"./Input-tvIXGXmO.js";import"./Hidden-D604MEhG.js";import"./Button-DqAr_Q3f.js";import"./useLabels-Ca7v6l-q.js";import"./useButton-DElLBHjA.js";import"./useTextField-DxtzIIET.js";import"./useControlledState-CfXtp8hs.js";import"./useField-7H-zKfh5.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-BfoWM_JL.js";import"./Dialog-Cj8ki1Hg.js";import"./OverlayArrow-Dqlp4uUl.js";import"./useResizeObserver-B_WyBlk8.js";import"./Collection-Dn6tIavS.js";import"./index-CPvCTsGB.js";import"./Separator-DBIn7cNY.js";import"./SelectionManager-C7e3B10G.js";import"./useEvent-BPy_avrj.js";import"./scrollIntoView-B9C68jgb.js";import"./SelectionIndicator-DjVvrJs-.js";import"./useDescription-BdbzbGud.js";import"./ListKeyboardDelegate-B2duwmnq.js";import"./PressResponder-CDJA5YO8.js";import"./useLocalizedStringFormatter-DCwlqfNN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BNm3_zhV.js";import"./VisuallyHidden-YR2KbVd6.js";import"./x-CBM_MZZz.js";import"./createLucideIcon-Ft43kjRZ.js";import"./useLocalizedStringFormatter-BmqhCjnA.js";import"./Heading-DGMv4Qcq.js";import"./info-BBOV1Q_L.js";import"./Popover-vuScbU9k.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C79T47jU.js";import"./DragAndDrop-Dpt2dUU_.js";import"./inertValue-DiAoy3Bn.js";import"./useListState-ECfn_HkJ.js";import"./Tag-DHsLxOg7.js";import"./useHighlightSelectionDescription-CYGgWQ4d.js";import"./useUpdateEffect-D57o_B0x.js";import"./useHasTabbableChild-COp5riqv.js";import"./chevron-down-1NfuR_yx.js";import"./Button.module-CtQ1deO8.js";import"./check-BFbYxWZT.js";import"./useToggleState-C7OkEJ8e.js";import"./Virtualizer-Oqjpb8Wk.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
