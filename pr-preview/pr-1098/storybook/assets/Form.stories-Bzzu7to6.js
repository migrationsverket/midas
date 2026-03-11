import{j as e}from"./iframe-C2Yyxb_o.js";import{$ as c}from"./Form-CyxWrLxN.js";import{G as d}from"./Grid-CyUSfw3K.js";import{G as i}from"./GridItem-D1kOGPRE.js";import{a as x,R as u}from"./Radio-UJYPDiO_.js";import{C as I}from"./CheckboxGroup-B8lvfZ2x.js";import{C as G}from"./Checkbox-BcvjsE0H.js";import{T as t}from"./TextField-DIkv_TJH.js";import{S as l}from"./Select-2O0VQxTC.js";import{L as p}from"./ListBoxItem-BkJ-gj2z.js";import{B as a}from"./Button-BQqfifzb.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-WFtffLiW.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C7BWwups.js";import"./useFocusRing-nMTXWlTy.js";import"./index-DNvvTP-Y.js";import"./index-DURILlkI.js";import"./clsx-Ciqy0D92.js";import"./Group-CcsfCsPd.js";import"./FieldError-C6hW-3rq.js";import"./Text-Dt7S0YjD.js";import"./Text-CeM-jeK1.js";import"./Button-BIrUuJFL.js";import"./Hidden-DgX5eHvD.js";import"./useLabels-BZQhvLB1.js";import"./useButton-COo6uvE9.js";import"./SelectionIndicator-TGObzo75.js";import"./useField-_oAE-yI6.js";import"./VisuallyHidden-B7F_lxL0.js";import"./useControlledState-Cdg6EvLr.js";import"./Label-BSIe7yZO.js";import"./Dialog-Ca5QR5rZ.js";import"./RSPContexts-2VRlgjKK.js";import"./OverlayArrow-Cuj2GhQm.js";import"./useResizeObserver-DApr3h-8.js";import"./Collection-CRznF4DQ.js";import"./index-SCf2pMTj.js";import"./Separator-DYnNf088.js";import"./SelectionManager-Bj0gjutB.js";import"./useEvent-DX2tR9aV.js";import"./scrollIntoView-CyGcDExg.js";import"./useDescription-BVRp3o_m.js";import"./ListKeyboardDelegate-CIhBGTnQ.js";import"./PressResponder-DCy26f7a.js";import"./useLocalizedStringFormatter-BR3z1GcU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C1QgDtMf.js";import"./getScrollParent-BkBLu-wI.js";import"./x-DfcaNs2P.js";import"./createLucideIcon-CfyIEXzg.js";import"./useLocalizedStringFormatter-Cbipm8_N.js";import"./Heading-BDvA49Rx.js";import"./info-DwWqKY3j.js";import"./Popover-CFwYPtoe.js";import"./check-DaB1OjsN.js";import"./useToggleState-2QLi4EFT.js";import"./TextFieldBase-DHjJ05yC.js";import"./Input-BVdDzWXZ.js";import"./useTextField-dCbEBezK.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-87_oB7H8.js";import"./DragAndDrop-CrOGdbc2.js";import"./inertValue-9yenkhji.js";import"./useListState-9nJIcTLU.js";import"./TagGroup-DvjakGQQ.js";import"./useHighlightSelectionDescription-DyhhRz2m.js";import"./useUpdateEffect-DFdE-Uuv.js";import"./useHasTabbableChild-BmNg7EzH.js";import"./chevron-down-BSAmxjfI.js";import"./Virtualizer-C9wUl2Av.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
