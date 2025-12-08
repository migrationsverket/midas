import{j as e}from"./iframe-Cmcg9luQ.js";import{$ as c}from"./Form-DD6Ez8Rg.js";import{G as d}from"./Grid-CceYN8Wy.js";import{G as i}from"./GridItem-BD5e7DMl.js";import{T as t}from"./TextField-TYCeDDYb.js";import{S as l}from"./Select-fkAvyNjY.js";import{B as a}from"./Button-2Trrvjfa.js";import{R as x,a as u}from"./Radio-DshhEdrJ.js";import{C as I}from"./CheckboxGroup-GDd7HMV2.js";import{C as G}from"./Checkbox-C3Mf6OE5.js";import{L as p}from"./ListBoxItem-DeW22xIu.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DkJuHdm3.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CGNYzqPR.js";import"./useFocusRing-DDfGAqyv.js";import"./index-CGA0FNtf.js";import"./index-DVbC1Dtd.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-C7CGBXeX.js";import"./TextField-D0fFL62n.js";import"./FieldError-BaL3LJ5r.js";import"./Text-hbQ-WDrk.js";import"./Text-BAN3IH2j.js";import"./RSPContexts-XO60EeIg.js";import"./Group-CuTJjGlx.js";import"./Input-C3_Ex5Aq.js";import"./Hidden-zwF0tAvB.js";import"./Button-CHShYw1t.js";import"./useLabels-Cu1LcQOl.js";import"./useButton-DKMZ0sMp.js";import"./useTextField-DtBM3_oK.js";import"./useControlledState-CQt4n5kP.js";import"./useField-CJ_MOfrF.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-B5Cwv84Z.js";import"./Dialog-BwxH-cxz.js";import"./OverlayArrow-DJYA6_W8.js";import"./useResizeObserver-CFsR_YAg.js";import"./Collection-VusCcygG.js";import"./index-B1BPqnSZ.js";import"./Separator-yeVdyden.js";import"./SelectionManager-C3JyXz3B.js";import"./useEvent-yxaIvS7j.js";import"./scrollIntoView-GW3hjUpk.js";import"./SelectionIndicator-JaC0r7eS.js";import"./useDescription-DVpoVzOH.js";import"./ListKeyboardDelegate-JZyz8SsL.js";import"./PressResponder-nkroryU4.js";import"./useLocalizedStringFormatter-DlNfiCCT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Dj2mCMcV.js";import"./VisuallyHidden-DrDA4vjy.js";import"./x-BZHozVPt.js";import"./createLucideIcon-BL352A7A.js";import"./useLocalizedStringFormatter-DdGC_wlX.js";import"./Heading-DqvvOFdk.js";import"./info-zkz18lyW.js";import"./Popover-CUkqD4Xx.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CK4NX7Sj.js";import"./DragAndDrop-BnUNH1W8.js";import"./inertValue-DvCT9PL0.js";import"./useListState-BD7GQddP.js";import"./Tag-DS7w079p.js";import"./useHighlightSelectionDescription-DJpP67y7.js";import"./useUpdateEffect-WTTesj0z.js";import"./useHasTabbableChild-DOyuRHnY.js";import"./chevron-down-BXiTqBg0.js";import"./Button.module-Co5e5YHp.js";import"./check-D3sAvMe-.js";import"./useToggleState-GIcaVRxH.js";import"./Virtualizer-DiURuwiS.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
