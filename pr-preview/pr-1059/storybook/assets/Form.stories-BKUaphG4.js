import{j as e}from"./iframe-DY-bI3Dg.js";import{$ as c}from"./Form-D66FRXmw.js";import{G as d}from"./Grid-DxVEBcOB.js";import{G as i}from"./GridItem-Bf_TjJN0.js";import{a as x,R as u}from"./Radio-DziiNCy1.js";import{C as I}from"./CheckboxGroup-veElJey-.js";import{C as G}from"./Checkbox-B6_gVzH5.js";import{T as t}from"./TextField-BvlMiHw9.js";import{S as l}from"./Select-Cevo_b8C.js";import{L as p}from"./ListBoxItem-BVkN-0s2.js";import{B as a}from"./Button-D_pZMGSb.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BUdZKq-e.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CXVRgJGB.js";import"./useFocusRing-CoHcHCSJ.js";import"./index-BbO7iBgM.js";import"./index-BlJnpVmq.js";import"./clsx-Ciqy0D92.js";import"./Group-BTkKg-7f.js";import"./FieldError-q3KGq0Kn.js";import"./Text-BkObjjcV.js";import"./Text-Ds5qe3f-.js";import"./Button-BtfH31ZB.js";import"./Hidden-CIKdpVxl.js";import"./useLabels-BM327Hkh.js";import"./useButton-BbpHsEWl.js";import"./SelectionIndicator-CDaozb0n.js";import"./useField-CytuTSNm.js";import"./VisuallyHidden-Bco5rUHP.js";import"./useControlledState-DqXLKbh_.js";import"./Label-CdOudSpf.js";import"./Dialog-DKiU6M1K.js";import"./RSPContexts-kc53uUDM.js";import"./OverlayArrow-BgP4fVxJ.js";import"./useResizeObserver-D5biT02n.js";import"./Collection-D7m5k63G.js";import"./index-lbOlXOLi.js";import"./Separator-C33z_10n.js";import"./SelectionManager-B5LK4q_Z.js";import"./useEvent-yA0ydpfu.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-MJqaxJYE.js";import"./ListKeyboardDelegate-DA4YIuyy.js";import"./PressResponder-CkPTmaw2.js";import"./useLocalizedStringFormatter-C3XMQvqw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BkvUYII9.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-DCOCLMzd.js";import"./createLucideIcon-WJDXuKIa.js";import"./useLocalizedStringFormatter-C40Mbmtc.js";import"./Heading-eS0c-HBo.js";import"./info-D9M1w_z6.js";import"./Popover-DywFxgdd.js";import"./check-kANKCVii.js";import"./useToggleState-1OAZJtns.js";import"./TextFieldBase-BecHIjRQ.js";import"./Input-BCd3MNHK.js";import"./useTextField-BhUrSeZr.js";import"./TextField.module-Cm6797Xw.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CNg64gRc.js";import"./DragAndDrop-BzBbvgu7.js";import"./inertValue-DSVmDJsT.js";import"./useListState-DwuMMB1g.js";import"./TagGroup-BgnMHyDK.js";import"./useHighlightSelectionDescription-BHjPJovn.js";import"./useUpdateEffect-D_XpAwsc.js";import"./useHasTabbableChild-DLFWikFf.js";import"./chevron-down-BTzxhOcV.js";import"./Virtualizer-Dz6G570s.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
