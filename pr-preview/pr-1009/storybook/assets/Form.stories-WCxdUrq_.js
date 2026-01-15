import{j as e}from"./iframe-CfYlVJbT.js";import{$ as c}from"./Form-CkwuCk_n.js";import{G as d}from"./Grid-Pufzi8UY.js";import{G as i}from"./GridItem-Dm3-bucU.js";import{T as t}from"./TextField-XrJaDNUs.js";import{S as l}from"./Select-BUrm_9-7.js";import{B as a}from"./Button-mO0qg6G0.js";import{R as x,a as u}from"./Radio-Dk7f3irU.js";import{C as I}from"./CheckboxGroup-DBvG_pqR.js";import{C as G}from"./Checkbox-f6GoXc5f.js";import{L as p}from"./ListBoxItem-D6oXUUQT.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CJmxlmBT.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BsmaiakS.js";import"./useFocusRing-CoZPHDQr.js";import"./index-Ye0e-ntf.js";import"./index-CP4lNSy2.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-C78mkGQe.js";import"./TextField-CLJwfM9x.js";import"./FieldError-C1ZSTrtV.js";import"./Text-DPDTmGdI.js";import"./Text-a5g5-yXG.js";import"./RSPContexts-B6MfxgMQ.js";import"./Group-RD6g6wj0.js";import"./Input-CGEiRCDO.js";import"./Hidden-CLJR8IU5.js";import"./Button-CF5oaspZ.js";import"./useLabels-CfaUcrJ-.js";import"./useButton-CwgKmRtS.js";import"./useTextField-2f_4fm7z.js";import"./useControlledState-BKJCcjym.js";import"./useField-All465gQ.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BpiMwJOf.js";import"./Dialog-DFj_hi3q.js";import"./OverlayArrow-CxGag7bJ.js";import"./useResizeObserver-C7qcJTS3.js";import"./Collection-DiU-1jRC.js";import"./index-Dokwu504.js";import"./Separator-BvPwW-ao.js";import"./SelectionManager-J1zya0Zc.js";import"./useEvent-X8mwGVrv.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D6nphIwP.js";import"./useDescription-DZuf13ft.js";import"./ListKeyboardDelegate-BxhRRDfm.js";import"./PressResponder-DEY1h2Cp.js";import"./useLocalizedStringFormatter-BY8QYVwG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DxI-wXWL.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DRHGK4kj.js";import"./x-pOvGEv2b.js";import"./createLucideIcon-BodeLy3S.js";import"./useLocalizedStringFormatter-XdRVw3Iq.js";import"./Heading-CxtVvS-8.js";import"./info-C4iI7mvH.js";import"./Popover-DexhHeTj.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BmiLXig5.js";import"./DragAndDrop-BpZJxkhR.js";import"./inertValue-CP6zPQN2.js";import"./useListState-BlCrI3ap.js";import"./Tag-BAKj9SF9.js";import"./useHighlightSelectionDescription-BjAvyU2L.js";import"./useUpdateEffect-BKrzEtkl.js";import"./useHasTabbableChild-CPOBvEB6.js";import"./chevron-down-CRRSNzvu.js";import"./Button.module-Co5e5YHp.js";import"./check-DhJddZL6.js";import"./useToggleState-DQhq3AU-.js";import"./Virtualizer-DB1_ny5s.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
