import{j as e}from"./iframe-B--hDPXb.js";import{c}from"./Form-U2PISRcB.js";import{G as d}from"./Grid-BDSp8pip.js";import{G as i}from"./GridItem-Dwi3iZB4.js";import{a as x,R as u}from"./Radio-Ck12fu1Y.js";import{C as I}from"./CheckboxGroup-Djw4D0ni.js";import{C as G}from"./Checkbox-D6nqcJwJ.js";import{T as t}from"./TextField-BrFuleU3.js";import{S as l}from"./Select-Cn1BcWLp.js";import{L as p}from"./ListBoxItem-DL2ol7Bk.js";import{B as a}from"./Button-Bz3nOl8L.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DBQnIZ7Q.js";import"./utils-DaPQhgmu.js";import"./clsx-B-dksMZM.js";import"./index-CVdnj8Ui.js";import"./index-Be4ICNeG.js";import"./clsx-Ciqy0D92.js";import"./Group-0GBrZlGV.js";import"./FieldError-B0I-izd3.js";import"./Text-eQWaQXgM.js";import"./Text-BKE4mpEc.js";import"./Button-C9U5DdED.js";import"./Hidden-CMfVl8d1.js";import"./useLabel-BX5mcItr.js";import"./useLabels-DcRK7D8e.js";import"./useButton-CAycgAqx.js";import"./SelectionIndicator-C09sddeF.js";import"./useField-B8UugQx6.js";import"./VisuallyHidden-8_Tg-jOG.js";import"./useControlledState-DZkg54SI.js";import"./Label-DA4He307.js";import"./Dialog-BRZImhOo.js";import"./RSPContexts-DkE08RbH.js";import"./OverlayArrow-DclCvrFE.js";import"./useResizeObserver-CxNKLpVu.js";import"./Collection-CUFtkeWs.js";import"./index-DHsR75bP.js";import"./Separator-XJaVReYL.js";import"./SelectionManager-oY1epqDt.js";import"./useEvent-DlQ_v0NJ.js";import"./scrollIntoView-Cdvuqxjj.js";import"./useDescription-BIxNiA0o.js";import"./ListKeyboardDelegate-B2SKkgzs.js";import"./PressResponder-D0pzj7fY.js";import"./useLocalizedStringFormatter-ZP-DQ3dI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DOlZqxuA.js";import"./getScrollParent-DYArvUGl.js";import"./ModalOverlay-CpaKEMAf.js";import"./x-D9iWQ3e4.js";import"./createLucideIcon-BSPs0YiP.js";import"./useLocalizedStringFormatter-gOdJRbCD.js";import"./Heading-CZ2LHrqz.js";import"./info-CDs8PH6H.js";import"./Popover-t_Swnzg_.js";import"./check-DgcRJV7f.js";import"./useToggleState-BMf-aMpQ.js";import"./TextFieldBase-B31sHj5C.js";import"./Input-DgqP73Ss.js";import"./useTextField-D5SKRwZR.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DaruX899.js";import"./DragAndDrop-k4lxfqez.js";import"./inertValue-B1MBRQsi.js";import"./useListState-BVbnYYgZ.js";import"./TagGroup-DoyyeR-R.js";import"./useHighlightSelectionDescription-B0RykjEi.js";import"./useUpdateEffect-BfKX2Srt.js";import"./useHasTabbableChild-p4FAe4EC.js";import"./chevron-down-DGwWDBmj.js";import"./Virtualizer-R14ccRL5.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
