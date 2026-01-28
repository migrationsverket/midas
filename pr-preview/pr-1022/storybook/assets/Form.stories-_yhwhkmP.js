import{j as e}from"./iframe-B4Bxc31-.js";import{$ as c}from"./Form-Ds8b_gZJ.js";import{G as d}from"./Grid-B3otF7Ug.js";import{G as i}from"./GridItem-BgCvCNSh.js";import{T as t}from"./TextField-B_fY7_k3.js";import{S as l}from"./Select-Bq9DU1VW.js";import{B as a}from"./Button-CN8pseCj.js";import{R as x,a as u}from"./Radio-DfNHyNUB.js";import{C as I}from"./CheckboxGroup-BQFF7lft.js";import{C as G}from"./Checkbox-DkQ_AWlW.js";import{L as p}from"./ListBoxItem-CxxGArWR.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CeZcgYm6.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BQSgNpFd.js";import"./useFocusRing-BfKHzdgs.js";import"./index-C4J05Lc5.js";import"./index-DgJUXc_n.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-D59PB7Bi.js";import"./TextField-GLAFCFhg.js";import"./FieldError-CihcasJE.js";import"./Text-r5dJNPiY.js";import"./Text-JHx8n9q1.js";import"./RSPContexts-D2qBqFC6.js";import"./Group-DrFgJ0ZN.js";import"./Input-BTbEku2X.js";import"./Hidden-C62-4jmO.js";import"./Button-CDG3o-tS.js";import"./useLabels-wF9e--1W.js";import"./useButton-CcZzD6iW.js";import"./useTextField-D1gI0ZEN.js";import"./useControlledState-Cg9KEN5b.js";import"./useField-CUKRhRws.js";import"./TextField.module-1fNSVGjT.js";import"./Label-5cptDu9k.js";import"./Dialog-BeqQGcVr.js";import"./OverlayArrow-CoRXoM7X.js";import"./useResizeObserver-CiGakr_c.js";import"./Collection-B9xM4Pal.js";import"./index-mbFFKS_D.js";import"./Separator-CMsTmUbN.js";import"./SelectionManager-L_Duk7qi.js";import"./useEvent-D5R27whq.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CEVTJOdn.js";import"./useDescription-CSCKMn8T.js";import"./ListKeyboardDelegate-D96mliyZ.js";import"./PressResponder-RGGxpaN4.js";import"./useLocalizedStringFormatter-D5WpXGBK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CPpUi3cs.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DlEhGwXr.js";import"./x-CCZLGaNC.js";import"./createLucideIcon-DGUSaHO7.js";import"./useLocalizedStringFormatter-DFzkaQ8-.js";import"./Heading-BI4qkTim.js";import"./info-C5tm93Rd.js";import"./Popover-DAn-SSfJ.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CAfcBF9Z.js";import"./DragAndDrop-ZuhJeQnC.js";import"./inertValue-Bk2hu2eY.js";import"./useListState-DEuO0xgY.js";import"./Tag-D4x15Ada.js";import"./useHighlightSelectionDescription-CA2BLUQ3.js";import"./useUpdateEffect-PTDHJgy2.js";import"./useHasTabbableChild-VMSMbwmB.js";import"./chevron-down-BN7NfXtw.js";import"./Button.module-Co5e5YHp.js";import"./check-CFLl1Tqx.js";import"./useToggleState-CH3c1uO2.js";import"./Virtualizer-BXRcOUj-.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
