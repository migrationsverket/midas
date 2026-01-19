import{j as e}from"./iframe-scLSUKLC.js";import{$ as c}from"./Form-DfsYFccC.js";import{G as d}from"./Grid-ZI3Vsch7.js";import{G as i}from"./GridItem-lgf9jiTN.js";import{T as t}from"./TextField-jRRW-U6p.js";import{S as l}from"./Select-DqLEmIQ0.js";import{B as a}from"./Button-Da7_Ionc.js";import{R as x,a as u}from"./Radio-CrOCrudF.js";import{C as I}from"./CheckboxGroup-Ctynbccy.js";import{C as G}from"./Checkbox-CzVP-QxJ.js";import{L as p}from"./ListBoxItem-5EOohltk.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-VusYSVV3.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CSTJe35f.js";import"./useFocusRing-_IjzIfKM.js";import"./index-mQxC8hvk.js";import"./index-DpJjKeec.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-6BD9pR_T.js";import"./TextField-qwnSBzDA.js";import"./FieldError-CFquMVDb.js";import"./Text-DTyekGW6.js";import"./Text-Dt0v8fCv.js";import"./RSPContexts-DuBR0pyr.js";import"./Group-C1sBjPMW.js";import"./Input-WBGTxWy8.js";import"./Hidden-D_mDfWbG.js";import"./Button-DV8mnRES.js";import"./useLabels-CMKHi586.js";import"./useButton-Cj9v_jLE.js";import"./useTextField-Cyj6jo9h.js";import"./useControlledState-BLpi_x0u.js";import"./useField-2RcysjcJ.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DzNRkmH8.js";import"./Dialog-BTLbqk4N.js";import"./OverlayArrow-B4WRUgAO.js";import"./useResizeObserver-KYSZwn-M.js";import"./Collection-DN-3I-_7.js";import"./index-ChoGj1Ct.js";import"./Separator-inq0kH5q.js";import"./SelectionManager-BIc1t39b.js";import"./useEvent-DedY8LRC.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-1uui7tH5.js";import"./useDescription-B0-u872d.js";import"./ListKeyboardDelegate-C5uHsGyp.js";import"./PressResponder-DFvDffbc.js";import"./useLocalizedStringFormatter-C0RBb53M.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-COXPLuj_.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BH-0CD7g.js";import"./x-D0Bj0XkU.js";import"./createLucideIcon-D5mqExBa.js";import"./useLocalizedStringFormatter-B1l7IBDm.js";import"./Heading-DJNjhrJN.js";import"./info-VLNYI4uz.js";import"./Popover-gy1ZOpM_.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C-tchMoX.js";import"./DragAndDrop-CFzMZHvw.js";import"./inertValue-D1ioCWzG.js";import"./useListState-DuTmQNOf.js";import"./Tag-BgV-FOlu.js";import"./useHighlightSelectionDescription-Db4JOz5o.js";import"./useUpdateEffect-d1MK7SJC.js";import"./useHasTabbableChild-Cb3_Y6TV.js";import"./chevron-down-CRJnettj.js";import"./Button.module-Co5e5YHp.js";import"./check-sQAcBH4J.js";import"./useToggleState-8_juN9Jd.js";import"./Virtualizer-CuSlkKxX.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
