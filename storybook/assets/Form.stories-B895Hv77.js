import{j as e}from"./iframe-Bj3rykqq.js";import{$ as c}from"./Form-Dizw0pBP.js";import{G as d}from"./Grid-DGLbOWLk.js";import{G as i}from"./GridItem-fjZxnirM.js";import{a as x,R as u}from"./Radio-DuOmO5Rb.js";import{C as I}from"./CheckboxGroup-DsPta_SF.js";import{C as G}from"./Checkbox-Dhwmk9Ee.js";import{T as t}from"./TextField-Bf7p-Uet.js";import{S as l}from"./Select-WRELDxIt.js";import{L as p}from"./ListBoxItem-7ChzmFbj.js";import{B as a}from"./Button-DJUV-Oif.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BPR6QYXC.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CYMzGIyK.js";import"./useFocusRing-C7uadSDO.js";import"./index-Cayhktc8.js";import"./index-CnCGQqbA.js";import"./clsx-Ciqy0D92.js";import"./Group-DMknLoGk.js";import"./FieldError-CGmgGZmu.js";import"./Text-D5Hv1XGK.js";import"./Text-DPxIPb0k.js";import"./Button-BY6aKs9R.js";import"./Hidden-H2J0AFM4.js";import"./useLabels-C9jhOE8d.js";import"./useButton-5QuuU98A.js";import"./SelectionIndicator-DW_78Rrm.js";import"./useField-BMzGe7LS.js";import"./VisuallyHidden-DZrJwb84.js";import"./useControlledState-RfhzWKsJ.js";import"./Label-bvwpiHl9.js";import"./Dialog-CDz5q8XN.js";import"./RSPContexts-Cy2kM2_o.js";import"./OverlayArrow-BPwbOk4G.js";import"./useResizeObserver-D9o13XW_.js";import"./Collection-Cj9-B7W9.js";import"./index-BC12g_-D.js";import"./Separator-myLEeVCT.js";import"./SelectionManager-BkdSTgS9.js";import"./useEvent-Z7oo2rlc.js";import"./scrollIntoView-GIX096WN.js";import"./useDescription-DOgLYOne.js";import"./ListKeyboardDelegate-CIZwYtIR.js";import"./PressResponder-CBnYRDYm.js";import"./useLocalizedStringFormatter-B6y89RBX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DzEmLsjx.js";import"./getScrollParent-B0dYpp2l.js";import"./x-BjCQEpYP.js";import"./createLucideIcon-CZGOASFZ.js";import"./useLocalizedStringFormatter-B96CwRWL.js";import"./Heading-SaNHDBgy.js";import"./info-B6mPVH9Q.js";import"./Popover-BybWTMpG.js";import"./check-EsYXMsMj.js";import"./useToggleState-CaoOixly.js";import"./TextFieldBase-DGbvJ0HP.js";import"./Input-Brwhl1LE.js";import"./useTextField-BEFy2JUH.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-rSjxnW0f.js";import"./DragAndDrop-B35E8_OU.js";import"./inertValue-gmpYmLvu.js";import"./useListState-8_vjO4Kd.js";import"./TagGroup-D9mr5WZ_.js";import"./useHighlightSelectionDescription-D5T-M7LZ.js";import"./useUpdateEffect-Di_zLKx0.js";import"./useHasTabbableChild-BdlPlGAq.js";import"./chevron-down-CK1ex2_M.js";import"./Virtualizer-I5-yo9L1.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
