import{j as e}from"./iframe-pRNC08Mv.js";import{$ as c}from"./Form-BIFDjctB.js";import{G as d}from"./Grid-D37t0Qio.js";import{G as i}from"./GridItem-BdTwondG.js";import{T as t}from"./TextField-B9tEf6U7.js";import{S as l}from"./Select-C6OoZU7M.js";import{B as a}from"./Button-G7WsQ-Sd.js";import{R as x,a as u}from"./Radio-BVqUrqxz.js";import{C as I}from"./CheckboxGroup-DRsPswdy.js";import{C as G}from"./Checkbox-PrTg6BhB.js";import{L as p}from"./ListBoxItem-Hu4INzOl.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DRYUmso-.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DDkwvMKg.js";import"./useFocusRing-Bjmrddhc.js";import"./index-BlGFDQle.js";import"./index-D5Pm5N6C.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CwFTnTNz.js";import"./TextField-B7EDl9pU.js";import"./FieldError-RDINXYGh.js";import"./Text-BEH_DbAf.js";import"./Text-Bm0bWJiD.js";import"./RSPContexts-BMZfSrMw.js";import"./Group-DvH7IcFq.js";import"./Input-DUaAcgSw.js";import"./Hidden-BKem9kXH.js";import"./Button-CNTckaGC.js";import"./useLabels-BEx_Ux0v.js";import"./useButton-CNCxBdco.js";import"./useTextField-CbZm2bj8.js";import"./useControlledState-BGR8S5qz.js";import"./useField-s9cI_556.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Ca54J5-4.js";import"./Dialog-D6__rpD-.js";import"./OverlayArrow-hG1-p7o3.js";import"./useResizeObserver-LepMKJP1.js";import"./Collection-BzXaiYzk.js";import"./index-DtUhDu_0.js";import"./Separator-D7HS4OjN.js";import"./SelectionManager-DY5HUksX.js";import"./useEvent-C7lBE6BD.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DrheJoW2.js";import"./useDescription-CGxbLJcS.js";import"./ListKeyboardDelegate-U8YzZlWX.js";import"./PressResponder-Dj8awjPa.js";import"./useLocalizedStringFormatter-D4_cU62N.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BHS4BH4z.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DQpyket6.js";import"./x-BJEGTxBd.js";import"./createLucideIcon-ALsTbPK_.js";import"./useLocalizedStringFormatter-CzWjGcyN.js";import"./Heading-BUJgb2zv.js";import"./info-BISRqc0l.js";import"./Popover-D_FSyx7C.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CQqvJSJi.js";import"./DragAndDrop-CngMkfSm.js";import"./inertValue-sEJjb2q5.js";import"./useListState-ZfrtZ5xA.js";import"./Tag-DpspPjMb.js";import"./useHighlightSelectionDescription-DjKksEGC.js";import"./useUpdateEffect-C2RtT9th.js";import"./useHasTabbableChild-Dl1gZ51v.js";import"./chevron-down-CzXh8A_c.js";import"./Button.module-Co5e5YHp.js";import"./check-FOXzc6d1.js";import"./useToggleState-JukD1zPT.js";import"./Virtualizer-BTNugqA1.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
