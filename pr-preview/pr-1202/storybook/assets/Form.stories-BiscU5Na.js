import{j as e}from"./iframe-B3vg1P6Y.js";import{c}from"./Form-CWiiR15h.js";import{G as d}from"./Grid-C0-j89kv.js";import{G as i}from"./GridItem-Cx_RAiHB.js";import{a as x,R as u}from"./Radio-NMJxBaW0.js";import{C as I}from"./CheckboxGroup-BP__M8ED.js";import{C as G}from"./Checkbox-Bi82QmwM.js";import{T as t}from"./TextField-C9rs92LN.js";import{S as l}from"./Select-DqIl5HgA.js";import{L as p}from"./ListBoxItem-C8gR8AYO.js";import{B as a}from"./Button-Bihgy3ar.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-C6AjoB7d.js";import"./utils-n5Tj6M7m.js";import"./clsx-B-dksMZM.js";import"./index-C-kva3F-.js";import"./index-BwBCavJo.js";import"./clsx-Ciqy0D92.js";import"./Group-CAI_apUh.js";import"./FieldError-DFCvQgU7.js";import"./Text-DUOd7G_7.js";import"./Text-BlzVF25n.js";import"./Button-CnxNAqy1.js";import"./Hidden-fGQAJpTQ.js";import"./useLabel-DI7fi0Ro.js";import"./useLabels-DY9VFMmE.js";import"./useButton-BK-h-LZH.js";import"./SelectionIndicator-DUR8eU9J.js";import"./useField-CsXnP93Z.js";import"./VisuallyHidden-BtPzLQ1W.js";import"./useControlledState-CZjhAhOw.js";import"./Label-CXhX_7LG.js";import"./Dialog-Ck0jNi_G.js";import"./RSPContexts-CSreTt_o.js";import"./OverlayArrow-CELSYf-a.js";import"./useResizeObserver-S4QQkevW.js";import"./Collection-DT7NMnAh.js";import"./index-CIxhDy0F.js";import"./Separator-p3gMGDdc.js";import"./SelectionManager-BMpZJpvj.js";import"./useEvent-BjWnd_Rp.js";import"./scrollIntoView-BP5DeFq1.js";import"./useDescription-CNqQXY_p.js";import"./ListKeyboardDelegate-Dx_tUxi5.js";import"./PressResponder-DKn9mjlx.js";import"./useLocalizedStringFormatter-m57n-2t8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BnO3CeRR.js";import"./getScrollParent-BLZYM11o.js";import"./x-BD201NTP.js";import"./createLucideIcon-CB7DrpFH.js";import"./useLocalizedStringFormatter-Cy8EaEdn.js";import"./Heading--hjz4TQ0.js";import"./info-Df-oK5zf.js";import"./Popover-BI0fpvGT.js";import"./check-DaLldDzt.js";import"./useToggleState-kDSHl7q0.js";import"./TextFieldBase-DwJRduUc.js";import"./Input-WtolAofY.js";import"./useTextField-BU5ONFAO.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CVxSKwL6.js";import"./DragAndDrop-gZkwHpvv.js";import"./inertValue-BpZZAyVb.js";import"./useListState-47xPszfz.js";import"./TagGroup-DVVf9Ug3.js";import"./useHighlightSelectionDescription-DquwGPFI.js";import"./useUpdateEffect-Czvd6CfV.js";import"./useHasTabbableChild-Bzuh_HO9.js";import"./chevron-down-CiW_jUeo.js";import"./Virtualizer-CnT781TG.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
