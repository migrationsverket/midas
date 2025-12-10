import{j as e}from"./iframe-9RZ8qS0V.js";import{$ as c}from"./Form-DAZ2yY7t.js";import{G as d}from"./Grid-pB0nUzRo.js";import{G as i}from"./GridItem-BCPiI77v.js";import{T as t}from"./TextField-Bs5YZZFe.js";import{S as l}from"./Select-DvrDKSbu.js";import{B as a}from"./Button-_QzePwKA.js";import{R as x,a as u}from"./Radio-4zVG9DES.js";import{C as I}from"./CheckboxGroup-DpuGAJy5.js";import{C as G}from"./Checkbox-BfVwjxln.js";import{L as p}from"./ListBoxItem-DQTkQdHQ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BWR78VZD.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C7T-NU-t.js";import"./useFocusRing-C1UymAdv.js";import"./index-DYDrgj8o.js";import"./index-DXKOmJXy.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BjdHMPNn.js";import"./TextField-BI4Jf6k3.js";import"./FieldError-CUjdzv4o.js";import"./Text-DS83zdrx.js";import"./Text-C5_vA2qs.js";import"./RSPContexts-Ds-Tiy4a.js";import"./Group-CaS4_1q8.js";import"./Input-I6I2zEOA.js";import"./Hidden-CoooHu5i.js";import"./Button-DwckI6V_.js";import"./useLabels-DYhyLCxD.js";import"./useButton-CvOgPonk.js";import"./useTextField-B0kS5J_e.js";import"./useControlledState-C698iD7f.js";import"./useField-zgF83q1i.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-xPQy87i_.js";import"./Dialog-D4lCEOCj.js";import"./OverlayArrow-Ni2lUNrt.js";import"./useResizeObserver-CXYUE0pF.js";import"./Collection-RNgU2tiR.js";import"./index-YMhcIuwd.js";import"./Separator-vziZxE4T.js";import"./SelectionManager-D7KLd8Lh.js";import"./useEvent-eIh3SUOB.js";import"./scrollIntoView-BjOYFxBk.js";import"./SelectionIndicator-BPzi2wSX.js";import"./useDescription-QGCzoEz7.js";import"./ListKeyboardDelegate-Ck1YB2jp.js";import"./PressResponder-CKCxq1I_.js";import"./useLocalizedStringFormatter-BH65DG8h.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CTT2eo6L.js";import"./VisuallyHidden-r7QMy6xC.js";import"./x-nNTDHS8H.js";import"./createLucideIcon-BEqaj3-I.js";import"./useLocalizedStringFormatter-BtH6C6HU.js";import"./Heading-Wtvegeka.js";import"./info-BJeUukka.js";import"./Popover-CrcIFw5_.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-B8bdEV0C.js";import"./DragAndDrop-CUbQh5Fq.js";import"./inertValue-CD_g27tu.js";import"./useListState-Dp1V9JUe.js";import"./Tag-CYoU-XnA.js";import"./useHighlightSelectionDescription-uUhd7KNS.js";import"./useUpdateEffect-Cdlmg0Cj.js";import"./useHasTabbableChild-DB_OBTmQ.js";import"./chevron-down-CxC06VhF.js";import"./Button.module-D9QkU2r7.js";import"./check-CLw2aSu1.js";import"./useToggleState-C_WnR2hY.js";import"./Virtualizer-CUa8nIus.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
