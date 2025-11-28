import{j as e}from"./iframe-DOTz5vLQ.js";import{$ as c}from"./Form-7pjFp-vR.js";import{G as d}from"./Grid-DpXbeo8O.js";import{G as i}from"./GridItem-DrTaB8M8.js";import{T as t}from"./TextField-cLmCNHlj.js";import{S as l}from"./Select-DKixqAeo.js";import{B as a}from"./Button-BI9bImZc.js";import{R as x,a as u}from"./Radio-DrB3Tkd9.js";import{C as I}from"./CheckboxGroup-BmyB231L.js";import{C as G}from"./Checkbox-CNWqDLfT.js";import{L as p}from"./ListBoxItem-C-WhkrE1.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DXAj4U2V.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DHmiRRIw.js";import"./useFocusRing-q_YwuAcy.js";import"./index-nlddG7ZQ.js";import"./index-owQEYkmE.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-c1z6WX1s.js";import"./TextField-DqQnaK8-.js";import"./FieldError-ja_Ote2y.js";import"./Text-CjdyZ5QW.js";import"./Text-DrWNBvy9.js";import"./RSPContexts-yjaANf4K.js";import"./Group-C3MlQRxR.js";import"./Input-CGGCTRsv.js";import"./Hidden-BGFB1vfR.js";import"./Button-DIeU5GkG.js";import"./useLabels-884FkDRT.js";import"./useButton-DTRH3a68.js";import"./useTextField-CqcVDXje.js";import"./useControlledState-_AKX2YUw.js";import"./useField-UT8FVghx.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-Cog6QTTi.js";import"./Dialog-C78GsjfW.js";import"./OverlayArrow-DkSvYScg.js";import"./useResizeObserver-e8Z3Dgzx.js";import"./Collection-CtXmJOQn.js";import"./index-DiTbGSG6.js";import"./Separator-C_ECwe9c.js";import"./SelectionManager-CUeLG0jH.js";import"./useEvent-CPymZ_91.js";import"./scrollIntoView-DX3Zfy83.js";import"./SelectionIndicator-B2UAVmil.js";import"./useDescription-CIj0AxHV.js";import"./ListKeyboardDelegate-Cg1KrN-g.js";import"./PressResponder-Dl2zQSi2.js";import"./useLocalizedStringFormatter-Bhl8mpnd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-C__SYK6q.js";import"./VisuallyHidden-CKFFXczS.js";import"./x-DEYmj3es.js";import"./createLucideIcon-0SbUiGqR.js";import"./useLocalizedStringFormatter-DemG_s2c.js";import"./Heading-NV9ut5Xx.js";import"./info-DyVhyr_S.js";import"./Popover-DRG_lf-T.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-y3tHMsRL.js";import"./DragAndDrop-m5eweE_a.js";import"./inertValue-BK2hrNvT.js";import"./useListState-QOpGru0Y.js";import"./Tag-BkgAo5fh.js";import"./useHighlightSelectionDescription-C9nkIakl.js";import"./useUpdateEffect-DNOxtsU2.js";import"./useHasTabbableChild-Bj4-h_wm.js";import"./chevron-down-BlJyOGOK.js";import"./Button.module-CtQ1deO8.js";import"./check-CykrXHln.js";import"./useToggleState-VnKBVkvq.js";import"./Virtualizer-BmkxKLyW.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
