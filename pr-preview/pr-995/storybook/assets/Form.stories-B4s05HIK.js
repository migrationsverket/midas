import{j as e}from"./iframe-BdIMh-mp.js";import{$ as c}from"./Form-CaiSIrkQ.js";import{G as d}from"./Grid-BqMoHKDf.js";import{G as i}from"./GridItem-DqQuPYBs.js";import{T as t}from"./TextField-seaSJ3qG.js";import{S as l}from"./Select-B_QaJblg.js";import{B as a}from"./Button-CNVh9qH3.js";import{R as x,a as u}from"./Radio-DhFLVB0X.js";import{C as I}from"./CheckboxGroup-DFVa86zZ.js";import{C as G}from"./Checkbox-CSPHhWRD.js";import{L as p}from"./ListBoxItem-Dh8KF5nX.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DcDhyL9A.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C6vbNqNO.js";import"./useFocusRing-BNwH8fuD.js";import"./index-hViR2ylZ.js";import"./index-DZNXlpZV.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BFVZCsDd.js";import"./TextField-BpG_pKKv.js";import"./FieldError-DsymNm4A.js";import"./Text-C4WrRLPZ.js";import"./Text-Bx_0lix_.js";import"./RSPContexts-heqwVcoc.js";import"./Group-CnMK0XjG.js";import"./Input-DFl5F-qn.js";import"./Hidden-Wyg5sLjl.js";import"./Button-zJPbjdhx.js";import"./useLabels-C4ABAGya.js";import"./useButton-BS6Zvdtu.js";import"./useTextField-sO65FhyB.js";import"./useControlledState-CajUkngI.js";import"./useField-BrWC9yz0.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-ajdRWdF1.js";import"./Dialog-BbZHBJH-.js";import"./OverlayArrow-Bp8STe4J.js";import"./useResizeObserver-D7jrSUSa.js";import"./Collection-Cy4nxbfX.js";import"./index-BbBJBKCY.js";import"./Separator-B5-iJ2c-.js";import"./SelectionManager-4etEtUOS.js";import"./useEvent-DQNjJNfH.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B1zBVXx_.js";import"./useDescription-BK2hXU45.js";import"./ListKeyboardDelegate-CNLQbBT3.js";import"./PressResponder-BPkqrdcy.js";import"./useLocalizedStringFormatter-BqgT-J0v.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BMlNB04R.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-D8MfmHyq.js";import"./x-C6Q4fVg_.js";import"./createLucideIcon-DEobE2Q1.js";import"./useLocalizedStringFormatter-DXrVuCTi.js";import"./Heading-DtHnABte.js";import"./info-BDaUDc1X.js";import"./Popover-Vb2xxPW2.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C39cD_1A.js";import"./DragAndDrop-CgfGdOkC.js";import"./inertValue-dHZ_I8WS.js";import"./useListState-DT2Kucse.js";import"./Tag-CHvBvXSN.js";import"./useHighlightSelectionDescription-DHhyRigj.js";import"./useUpdateEffect-DrY-vnU8.js";import"./useHasTabbableChild-CkYvy9YN.js";import"./chevron-down-DWIFlBE3.js";import"./Button.module-Co5e5YHp.js";import"./check-DW0bbU_x.js";import"./useToggleState-Dr5YCEyB.js";import"./Virtualizer-CPsyJyoR.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
