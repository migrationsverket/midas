import{j as e}from"./iframe-DKSPN_rt.js";import{$ as c}from"./Form-DNk9CeTC.js";import{G as d}from"./Grid-U-ozqt3j.js";import{G as i}from"./GridItem-9zpbW2dA.js";import{a as x,R as u}from"./Radio-BrvqcfsJ.js";import{C as I}from"./CheckboxGroup-BL1Szm6a.js";import{C as G}from"./Checkbox-Cbc3PMXZ.js";import{T as t}from"./TextField-DwzmX6-g.js";import{S as l}from"./Select-BecKGjsw.js";import{L as p}from"./ListBoxItem-D3VJm_N7.js";import{B as a}from"./Button-DeDsiUlU.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dsb4CS80.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-No2F6jq6.js";import"./useFocusRing-DIM101qK.js";import"./index-CgoYFXbr.js";import"./index-DIEsqu5Q.js";import"./clsx-Ciqy0D92.js";import"./Group-DNNUthXt.js";import"./FieldError-CGHdNWyD.js";import"./Text-Bjh-HQuI.js";import"./Text-DS4myfGl.js";import"./Button-D_ksf53O.js";import"./Hidden-rmoVbPRV.js";import"./useLabels-DMhDiSEv.js";import"./useButton-ld_mmKe7.js";import"./SelectionIndicator-jJOTZ3KW.js";import"./useField-Bm2ze5GN.js";import"./VisuallyHidden-C5ojwSbT.js";import"./useControlledState-CRiY1CfR.js";import"./Label-CT_uc7QN.js";import"./Dialog-Cd0Qusqo.js";import"./RSPContexts-D7Y3JUuE.js";import"./OverlayArrow-D7xR0OBY.js";import"./useResizeObserver-Bu_ol_6y.js";import"./Collection-Pk1zjnDd.js";import"./index-B4oV2hzS.js";import"./Separator-BKjTkHwz.js";import"./SelectionManager-CRXXHeJa.js";import"./useEvent-WaBg8569.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CtUioLWT.js";import"./ListKeyboardDelegate-lcz-DEyi.js";import"./PressResponder-15UO_rnr.js";import"./useLocalizedStringFormatter-DHrvMH-8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CtpBP1yi.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-RaB1lDYv.js";import"./createLucideIcon-Cef0fBNb.js";import"./useLocalizedStringFormatter-BNEuYvl4.js";import"./Heading-BumJDw-e.js";import"./info-BOF0MMRQ.js";import"./Popover-DG4fFYgh.js";import"./check-DQevY4Zw.js";import"./useToggleState-BPz-Nz-B.js";import"./TextFieldBase-DRi9-Lpq.js";import"./Input-CPD_YwIo.js";import"./useTextField-BWfn6mOs.js";import"./TextField.module-Ck-VtJ3k.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DT1SkBUL.js";import"./DragAndDrop-CUFjF_qe.js";import"./inertValue-CXBvmBFg.js";import"./useListState-_oTXSJTn.js";import"./TagGroup-D9g2FqeL.js";import"./useHighlightSelectionDescription-B5hbYLq4.js";import"./useUpdateEffect-BwWPDfaK.js";import"./useHasTabbableChild-CZlczSRh.js";import"./chevron-down-dJpAjH_h.js";import"./Virtualizer-64te07LP.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
