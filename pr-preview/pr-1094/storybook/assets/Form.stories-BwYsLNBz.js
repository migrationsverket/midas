import{j as e}from"./iframe-C2hHAX_c.js";import{$ as c}from"./Form-BmO7u4eV.js";import{G as d}from"./Grid-CJYjl6L6.js";import{G as i}from"./GridItem-B2mAyjni.js";import{a as x,R as u}from"./Radio-DcAxo71q.js";import{C as I}from"./CheckboxGroup-Cyi56E4n.js";import{C as G}from"./Checkbox-Da4WQN-2.js";import{T as t}from"./TextField-UQVbZzbe.js";import{S as l}from"./Select-gh9KAteM.js";import{L as p}from"./ListBoxItem-Cc7lYBHw.js";import{B as a}from"./Button-DlfSSXdG.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CYjcBBm1.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DHc1AjUb.js";import"./useFocusRing-71g5CJVP.js";import"./index-utew35I4.js";import"./index-BISH_zx5.js";import"./clsx-Ciqy0D92.js";import"./Group-IfvQnpYh.js";import"./FieldError-D33fSaC5.js";import"./Text-CEBbuk7S.js";import"./Text-CXKXGfTm.js";import"./Button-D8SyKFCR.js";import"./Hidden-UkteWA62.js";import"./useLabels-CS2Af-Ri.js";import"./useButton-De47wRHH.js";import"./SelectionIndicator-C24OmCek.js";import"./useField-CMmSOBcA.js";import"./VisuallyHidden-DWzqY3m_.js";import"./useControlledState-Bqiy5-s7.js";import"./Label-BzcuGAQJ.js";import"./Dialog-DioqltWp.js";import"./RSPContexts-PGRfE4kt.js";import"./OverlayArrow-DJjWvuUn.js";import"./useResizeObserver-YYDXRqRx.js";import"./Collection-Dg-AlUMT.js";import"./index-XNBPZcEf.js";import"./Separator-BZupGPjm.js";import"./SelectionManager-k5gNZb-Z.js";import"./useEvent-T4VjhQCT.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BiuYFYuv.js";import"./ListKeyboardDelegate-WnG7Jb66.js";import"./PressResponder-ofK5jlKx.js";import"./useLocalizedStringFormatter-Cusafc4g.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DQepyth6.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-C0uuZGTx.js";import"./createLucideIcon-BcvDIfsv.js";import"./useLocalizedStringFormatter-BQOzlYhQ.js";import"./Heading-BANKo2Xq.js";import"./info-Bh7Hxsix.js";import"./Popover-DPy3wNDE.js";import"./check-BulYR5eh.js";import"./useToggleState-CLGzywEw.js";import"./TextFieldBase-Cc_LB8vr.js";import"./Input-gG2eCZpw.js";import"./useTextField-BVr0BcQN.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BebnK8HR.js";import"./DragAndDrop-CxUpEu7J.js";import"./inertValue-DpwH-Gk0.js";import"./useListState-CrwCNflF.js";import"./TagGroup-BrK4pF8z.js";import"./useHighlightSelectionDescription-C4MTqWzN.js";import"./useUpdateEffect-DelP0G60.js";import"./useHasTabbableChild-Da3HWmEH.js";import"./chevron-down-DniNDsyp.js";import"./Virtualizer-DYNpY5NR.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
