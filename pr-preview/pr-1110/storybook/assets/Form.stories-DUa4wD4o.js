import{j as e}from"./iframe-BLfzYH9C.js";import{$ as c}from"./Form-cxB3ur0K.js";import{G as d}from"./Grid-Crk4suPY.js";import{G as i}from"./GridItem-Vq9Kj4lk.js";import{a as x,R as u}from"./Radio-DXWg4Yb_.js";import{C as I}from"./CheckboxGroup-D_T8gFFr.js";import{C as G}from"./Checkbox-BQElW8sL.js";import{T as t}from"./TextField-Bbfq0toQ.js";import{S as l}from"./Select-G3O3dEUu.js";import{L as p}from"./ListBoxItem-BrNdOsvA.js";import{B as a}from"./Button-sSCuqLNu.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D0dfH4vr.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-YSQ6LHA7.js";import"./useFocusRing-F01J-ZUp.js";import"./index-BEL0ZsXZ.js";import"./index-DhCXTl7z.js";import"./clsx-Ciqy0D92.js";import"./Group-CZ7bViit.js";import"./FieldError-BSEuC_KV.js";import"./Text-Cc2e18q6.js";import"./Text-56NGX4CE.js";import"./Button-CMX4o17j.js";import"./Hidden-N269CFB0.js";import"./useLabels-Wx4YnUYv.js";import"./useButton-Bx_5EIaY.js";import"./SelectionIndicator-BfekULxp.js";import"./useField-DKtJjQd8.js";import"./VisuallyHidden-_5qjtK7j.js";import"./useControlledState-BRpuf71A.js";import"./Label-CRlv_YQO.js";import"./Dialog-K2Yv4GS0.js";import"./RSPContexts-BNbJSQvo.js";import"./OverlayArrow-BP2ncnR4.js";import"./useResizeObserver-CDZGr-1Y.js";import"./Collection-DFEsajZM.js";import"./index-DtV-80Z9.js";import"./Separator-DO8MgAw5.js";import"./SelectionManager-qSVT5I_Q.js";import"./useEvent-xhNamUK9.js";import"./scrollIntoView-B8nL968g.js";import"./useDescription-Dwgsbzew.js";import"./ListKeyboardDelegate-CaluARbj.js";import"./PressResponder-CBpc36_T.js";import"./useLocalizedStringFormatter-Cc04N7q5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DUuqGRqk.js";import"./getScrollParent-pMGfvvbY.js";import"./x-C-j_grLj.js";import"./createLucideIcon-CD_jUR-R.js";import"./useLocalizedStringFormatter-mYyUkQYg.js";import"./Heading-tqTcM_ey.js";import"./info-DRpzurts.js";import"./Popover-DElGLT-y.js";import"./check-J-IiiAqD.js";import"./useToggleState-DMIXjiMK.js";import"./TextFieldBase-1Bw7CC3z.js";import"./Input-C8TK0AgI.js";import"./useTextField-CE_JM4y7.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DAhJ84X5.js";import"./DragAndDrop-DDw7peB6.js";import"./inertValue-C2HNM4JU.js";import"./useListState-CCt3WfP7.js";import"./TagGroup-CQlWWY71.js";import"./useHighlightSelectionDescription-OovWuj3K.js";import"./useUpdateEffect-SBRqOirX.js";import"./useHasTabbableChild-xGrYgkGi.js";import"./chevron-down-48B-UdJb.js";import"./Virtualizer-Wk0SZH_6.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
