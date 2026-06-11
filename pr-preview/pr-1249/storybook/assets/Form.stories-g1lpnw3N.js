import{j as e}from"./iframe-Di5CTR8T.js";import{c}from"./Form-q1oODmDm.js";import{G as d}from"./Grid-Dsl2XdH6.js";import{G as i}from"./GridItem-C0U9GaPL.js";import{a as x,R as u}from"./Radio-Dy32i2pj.js";import{C as I}from"./CheckboxGroup-B5cScyDr.js";import{C as G}from"./Checkbox-CcIjHzw7.js";import{T as t}from"./TextField-7p59NyWW.js";import{S as l}from"./Select-Du9oFcCo.js";import{L as p}from"./ListBoxItem-VI46iDyG.js";import{B as a}from"./Button-zPsJWo_p.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DrwftOie.js";import"./utils-CtBItuGe.js";import"./clsx-B-dksMZM.js";import"./index-DitNwB70.js";import"./index-DBHfn5s_.js";import"./clsx-Ciqy0D92.js";import"./Group-D3mEeqQ-.js";import"./FieldError-Bv2rXWOC.js";import"./Text-ZJfVqn-h.js";import"./Text-n28vbpm4.js";import"./Button-2OtSDF-S.js";import"./Hidden-sHhuPHwe.js";import"./useLabel-B2_1exfs.js";import"./useLabels-B1J-T3xq.js";import"./useButton-C1jCWvmO.js";import"./SelectionIndicator-BD3Jo9O3.js";import"./useField-BrrjMWLY.js";import"./VisuallyHidden-DD_4lyF0.js";import"./useControlledState-I_KBwW67.js";import"./Label-mKPoFVPk.js";import"./Dialog-BJdR-I1-.js";import"./RSPContexts-DB30PmIp.js";import"./OverlayArrow-BgFIeVyY.js";import"./useResizeObserver-C6VfgOTj.js";import"./Collection-Cd6bQLAa.js";import"./index-C8zKGD88.js";import"./Separator-BnzzmdtP.js";import"./SelectionManager-C1q1HFOS.js";import"./useEvent-Crt2nr6j.js";import"./scrollIntoView-NTyBe7BV.js";import"./useDescription-XOfwguuv.js";import"./ListKeyboardDelegate-B_UfOpVg.js";import"./PressResponder-DW7M4-_e.js";import"./useLocalizedStringFormatter-WF6y2aSl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C1_x5jAl.js";import"./getScrollParent-2xlS7fKj.js";import"./ModalOverlay-PDQHlzPO.js";import"./x-B82Stdu9.js";import"./createLucideIcon-BtcOznK7.js";import"./useLocalizedStringFormatter-CoQGZsFN.js";import"./Heading-BZrlUYHo.js";import"./info-DOmqevh8.js";import"./Popover-Hfz6gWUK.js";import"./check-DZeaiyU5.js";import"./useToggleState-Do2ssiVe.js";import"./TextFieldBase-B0t0SuUd.js";import"./Input-CM0xH0-G.js";import"./useTextField-Cw_gJkmM.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DoaE8OGo.js";import"./DragAndDrop-I_BfAN1B.js";import"./inertValue-D4IHc4oi.js";import"./useListState-DAuvN8yq.js";import"./TagGroup-CxZ8HBbu.js";import"./useHighlightSelectionDescription-9pwskkhD.js";import"./useUpdateEffect-BkLBp1-R.js";import"./useHasTabbableChild-Ckz6mj12.js";import"./chevron-down-jkgMEtpv.js";import"./Virtualizer-CqbXPDJm.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
