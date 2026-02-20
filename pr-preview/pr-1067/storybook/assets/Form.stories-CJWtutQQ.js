import{j as e}from"./iframe-C97-KldL.js";import{$ as c}from"./Form-Dg1us4eS.js";import{G as d}from"./Grid-CAKMdzK7.js";import{G as i}from"./GridItem-CRtnV2xF.js";import{a as x,R as u}from"./Radio-CPXvET9F.js";import{C as I}from"./CheckboxGroup-gjmwc_6R.js";import{C as G}from"./Checkbox-Cv7tJ66E.js";import{T as t}from"./TextField-CfVuI_Bn.js";import{S as l}from"./Select-7j3ggaji.js";import{L as p}from"./ListBoxItem-WmSYXeNw.js";import{B as a}from"./Button-TcfJGFPW.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CT49lX3Q.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CPmiIrH4.js";import"./useFocusRing-BaDVQaIN.js";import"./index-C9-aWDE9.js";import"./index-DcQl-zHv.js";import"./clsx-Ciqy0D92.js";import"./Group-BkZ1G5Eu.js";import"./FieldError-CzHY_m0E.js";import"./Text-BWtrJhgb.js";import"./Text-kfKvhgrO.js";import"./Button-By32KbkP.js";import"./Hidden-Cns8g0IT.js";import"./useLabels-DbdYa4IU.js";import"./useButton-C3jqDXTt.js";import"./SelectionIndicator-CeibBvL7.js";import"./useField-VNtVV8X6.js";import"./VisuallyHidden-cBRDBRce.js";import"./useControlledState-BASohq_6.js";import"./Label-DgxvWV7H.js";import"./Dialog-DD8Nc2dh.js";import"./RSPContexts-CVaQzuT2.js";import"./OverlayArrow-BD4eRlxk.js";import"./useResizeObserver-C9RsjVbx.js";import"./Collection-HncGmFQp.js";import"./index-QjpHXcWP.js";import"./Separator-6HTi-cQh.js";import"./SelectionManager-CW0pq1_s.js";import"./useEvent-CjzdKbLS.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B32pZrdJ.js";import"./ListKeyboardDelegate-DOWibJoJ.js";import"./PressResponder-BbrzfePp.js";import"./useLocalizedStringFormatter-CDO2zV2D.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D8bZ8BQ0.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-Cjd9f1_p.js";import"./createLucideIcon-DyW2bSMY.js";import"./useLocalizedStringFormatter-CWWYhU2v.js";import"./Heading-CekMixw3.js";import"./info-Btx1Cq6B.js";import"./Popover-BqoLnGke.js";import"./check-CgtpV47X.js";import"./useToggleState-CaIpr3x1.js";import"./TextFieldBase-iNZeTVmk.js";import"./Input-D--SSIiA.js";import"./useTextField-BQuT8hc1.js";import"./TextField.module-Dhscz2t0.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BzhDNkD2.js";import"./DragAndDrop-DwJvcsK5.js";import"./inertValue-Dzg1Saux.js";import"./useListState-B1LBqFJF.js";import"./TagGroup-B4RgSMDK.js";import"./useHighlightSelectionDescription-rQ-_XTI_.js";import"./useUpdateEffect-COwk1XTI.js";import"./useHasTabbableChild-DnWKp8JB.js";import"./chevron-down-BmYlYezz.js";import"./Virtualizer-CZEfEiDB.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
