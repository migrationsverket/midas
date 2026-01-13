import{j as e}from"./iframe-DHyVQXUX.js";import{$ as c}from"./Form-Bj4F62gY.js";import{G as d}from"./Grid-CxOscxze.js";import{G as i}from"./GridItem-DQNkqlWp.js";import{T as t}from"./TextField-CA1QBDts.js";import{S as l}from"./Select-DAc-mUyV.js";import{B as a}from"./Button-BG_KuVY6.js";import{R as x,a as u}from"./Radio-D2NB20hO.js";import{C as I}from"./CheckboxGroup-DOi0W23o.js";import{C as G}from"./Checkbox-DWPALqRH.js";import{L as p}from"./ListBoxItem-DR-TAoJ1.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cetumt8p.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-b2TH__Nr.js";import"./useFocusRing-DM6_DbeH.js";import"./index-C151B4pU.js";import"./index-CIApz_MG.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BAbRExkc.js";import"./TextField-dYBJIYjd.js";import"./FieldError-BMHmwlEE.js";import"./Text-D3UlMe3R.js";import"./Text-el-hmg7N.js";import"./RSPContexts-Ct6jR0wT.js";import"./Group-m2yA8VxS.js";import"./Input-qIMXf2yT.js";import"./Hidden-LyTL37of.js";import"./Button-CgYi1yiU.js";import"./useLabels-BHMJFSGA.js";import"./useButton-C_cAHMJL.js";import"./useTextField-D-TfK_PS.js";import"./useControlledState-bSLg3DhZ.js";import"./useField-BG9qxNLR.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CDOV53PU.js";import"./Dialog-Bj73mGMK.js";import"./OverlayArrow-DVM91nbg.js";import"./useResizeObserver-BxFscn4p.js";import"./Collection-C-Mg0IVa.js";import"./index-Bdep5s3H.js";import"./Separator-gOY-2Llc.js";import"./SelectionManager-p7Iup8Nr.js";import"./useEvent-BtAGcOSe.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-6-Ysu_gZ.js";import"./useDescription-066NI39g.js";import"./ListKeyboardDelegate-CwyTu4CZ.js";import"./PressResponder-POYlhjjq.js";import"./useLocalizedStringFormatter-BO0fwLCb.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BZ_Cpeqq.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CrEjrJr0.js";import"./x-CTsV6SQ1.js";import"./createLucideIcon-BDpeJ1vC.js";import"./useLocalizedStringFormatter-BXMcFhqN.js";import"./Heading-Bzpzqhe4.js";import"./info-D7N7TtAI.js";import"./Popover-B8entSBQ.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Nso5vRLD.js";import"./DragAndDrop-CW26Wk93.js";import"./inertValue-B96viR5R.js";import"./useListState-BmM_pYiW.js";import"./Tag-DnnTt7EF.js";import"./useHighlightSelectionDescription-BR9JIJlZ.js";import"./useUpdateEffect-BHpW_8sf.js";import"./useHasTabbableChild-rxbNovdN.js";import"./chevron-down-BAmm8siq.js";import"./Button.module-Co5e5YHp.js";import"./check-DsdqrTHK.js";import"./useToggleState-DyI8Opkp.js";import"./Virtualizer-D5UeSTQf.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
