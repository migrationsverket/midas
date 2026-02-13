import{j as e}from"./iframe-BVjJh1qr.js";import{$ as c}from"./Form-BTuogIHL.js";import{G as d}from"./Grid-CmT0bZR4.js";import{G as i}from"./GridItem-N0ht2v_f.js";import{a as x,R as u}from"./Radio-Cya63ZnI.js";import{C as I}from"./CheckboxGroup-Df-JSlhy.js";import{C as G}from"./Checkbox-CnJzUPvu.js";import{T as t}from"./TextField-DdJz-sdI.js";import{S as l}from"./Select-947YpbGz.js";import{L as p}from"./ListBoxItem-D2i4WSTS.js";import{B as a}from"./Button-Dg78q2ju.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-bNy6ojY5.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-SFdJ2boW.js";import"./useFocusRing-TW7q1EUd.js";import"./index-DIEHB-cs.js";import"./index-CNkeeaIr.js";import"./clsx-Ciqy0D92.js";import"./Group-CmwB_bxN.js";import"./FieldError-C9WHVD5C.js";import"./Text-CsfvyS0Z.js";import"./Text-BB8xB_KG.js";import"./Button-BMjFxLp_.js";import"./Hidden-Cb128-qJ.js";import"./useLabels-Dp0cw4u-.js";import"./useButton-r4UQO9dh.js";import"./SelectionIndicator-CLchoed_.js";import"./useField-DNr4bZjA.js";import"./VisuallyHidden-D-q2CDSj.js";import"./useControlledState-C9LVXWZ-.js";import"./Label-DsHjDKtP.js";import"./Dialog-jgVbqZar.js";import"./RSPContexts-4cSt6u6S.js";import"./OverlayArrow-DDPjK939.js";import"./useResizeObserver-DJVRBe_U.js";import"./Collection-JqSksE_3.js";import"./index-CVyQMNda.js";import"./Separator-BL73eY4j.js";import"./SelectionManager-BZ3YveyL.js";import"./useEvent-CcPYrnrS.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-MeYAog7E.js";import"./ListKeyboardDelegate-cQjqjVFs.js";import"./PressResponder-DVLw-9bA.js";import"./useLocalizedStringFormatter-D4nGqZ_3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B7YH2_nR.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CeH2XBCE.js";import"./createLucideIcon-DI0VgPwY.js";import"./useLocalizedStringFormatter-C9aLA_6i.js";import"./Heading-6W50OjJi.js";import"./info-CFGW5YBP.js";import"./Popover-BAo9ORLy.js";import"./check-CGQNQWQS.js";import"./useToggleState-Cq6kFsTE.js";import"./TextFieldBase-CNS2Ip4G.js";import"./Input-nfqEOouR.js";import"./useTextField-YKtIDSyK.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Dlv_tpk-.js";import"./DragAndDrop-DYNk6K5i.js";import"./inertValue-DlRiQ4RG.js";import"./useListState-BYfaqcUV.js";import"./Tag-DcB2e6TP.js";import"./useHighlightSelectionDescription-BC8xtXdW.js";import"./useUpdateEffect-zOKT65gG.js";import"./useHasTabbableChild-2PYav4Tw.js";import"./chevron-down-bQnUhxmD.js";import"./Virtualizer-CeXvnRMZ.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
