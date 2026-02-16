import{j as e}from"./iframe-JdJ-OJm1.js";import{$ as c}from"./Form-yrI-dzfw.js";import{G as d}from"./Grid-C0lOl5_9.js";import{G as i}from"./GridItem-C070-Ixc.js";import{a as x,R as u}from"./Radio-CpKu7tpE.js";import{C as I}from"./CheckboxGroup-BgTXiTni.js";import{C as G}from"./Checkbox-BMoUmEOo.js";import{T as t}from"./TextField-B4XwukZ-.js";import{S as l}from"./Select-DF14XXvX.js";import{L as p}from"./ListBoxItem-mm6f4pyX.js";import{B as a}from"./Button-DhPOwdCl.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-96Qmq1tf.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BOj7Bfra.js";import"./useFocusRing-DO3ZBB6k.js";import"./index-BNPS8vul.js";import"./index-DPgChp4i.js";import"./clsx-Ciqy0D92.js";import"./Group-rPPYO04K.js";import"./FieldError-BnFcX8Xu.js";import"./Text-DIR17Pu1.js";import"./Text-JWOQbzzd.js";import"./Button-DZGa_zA9.js";import"./Hidden-DKn4TiUA.js";import"./useLabels-TKpnNBwe.js";import"./useButton-CFkNx72h.js";import"./SelectionIndicator-BVMdCOZy.js";import"./useField-DgnJ1pPy.js";import"./VisuallyHidden-Dgod2K5q.js";import"./useControlledState-D8NqpIqI.js";import"./Label-CXR60Qin.js";import"./Dialog-CvVjvxX0.js";import"./RSPContexts-FHwAvAup.js";import"./OverlayArrow-CLxF1Nrn.js";import"./useResizeObserver-B-MYGkyy.js";import"./Collection-C9if6wGk.js";import"./index-D4irGP9Q.js";import"./Separator-CoL6nCE9.js";import"./SelectionManager-Df6LefBc.js";import"./useEvent-LxIxBIYw.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CQRfVWLt.js";import"./ListKeyboardDelegate-BLVLGwaI.js";import"./PressResponder-WAEWb9JB.js";import"./useLocalizedStringFormatter-1JARTe_X.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C_zL_4CQ.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-DLZInyov.js";import"./createLucideIcon-oTUJ9cxW.js";import"./useLocalizedStringFormatter-C8P-aJlJ.js";import"./Heading-C_TZWBlV.js";import"./info-iKV4g4LT.js";import"./Popover-f5XJ8qYg.js";import"./check-0U43-RVh.js";import"./useToggleState-TpWr7m2e.js";import"./TextFieldBase-D1RD9-iD.js";import"./TextField-Coqb0JqV.js";import"./Input-CF7HKYg-.js";import"./useTextField-DVgm_0_v.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Dat-2UKb.js";import"./DragAndDrop-ujUiE8Yx.js";import"./inertValue-DingCnUv.js";import"./useListState-BHdqhFIY.js";import"./Tag-BBTnL2NR.js";import"./useHighlightSelectionDescription-C1HNBJrO.js";import"./useUpdateEffect-CiIfTNPm.js";import"./useHasTabbableChild-VRan9TQz.js";import"./chevron-down-CCdDR5V0.js";import"./Virtualizer-DN3JHuWs.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
