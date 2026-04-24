import{j as e}from"./iframe-Csum_Dn_.js";import{c}from"./Form-DtazZjcv.js";import{G as d}from"./Grid-CsnKU3Mu.js";import{G as i}from"./GridItem-B-KAQsHf.js";import{a as x,R as u}from"./Radio-zelfQ-8J.js";import{C as I}from"./CheckboxGroup-BkOcfqZ2.js";import{C as G}from"./Checkbox-CG8SStEU.js";import{T as t}from"./TextField-CtV14wUw.js";import{S as l}from"./Select-Bh53So0Z.js";import{L as p}from"./ListBoxItem-C9gaZN3T.js";import{B as a}from"./Button-dhowh8Zu.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-ClEYMHRu.js";import"./utils-Ge-V0544.js";import"./clsx-B-dksMZM.js";import"./index-BVxqAi5_.js";import"./index-k_0Ayxip.js";import"./clsx-Ciqy0D92.js";import"./Group-D0rK0BGE.js";import"./FieldError-JqGe9xU9.js";import"./Text-D-PYeQb1.js";import"./Text-tsq8PiKH.js";import"./Button-BUrmgwKE.js";import"./Hidden-CxHKwZ6C.js";import"./useLabel-Ca_R4Gv6.js";import"./useLabels-DlHehStK.js";import"./useButton-Cjc9nZaQ.js";import"./SelectionIndicator-CZyP-Kby.js";import"./useField-Dre-fZ9m.js";import"./VisuallyHidden-DDF8meml.js";import"./useControlledState-CRJrM8G1.js";import"./Label-VoyFbAO_.js";import"./Dialog-BTYxC76S.js";import"./RSPContexts-CufW8UMt.js";import"./OverlayArrow-Ce-uJfQ8.js";import"./useResizeObserver-D4WnD6HQ.js";import"./Collection-CkQ8sCKj.js";import"./index-BdWGuIGp.js";import"./Separator-gw1DkcLm.js";import"./SelectionManager-CFugCQ0I.js";import"./useEvent-CwVY4pnK.js";import"./scrollIntoView-Dy2xPLMm.js";import"./useDescription-LL4f_7qE.js";import"./ListKeyboardDelegate-nOZRNgMP.js";import"./PressResponder-CM5r8EaE.js";import"./useLocalizedStringFormatter-CsJPWzRf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B4mINI-w.js";import"./getScrollParent-BZSpcJr9.js";import"./ModalOverlay-DzNUAes9.js";import"./x-ClDHgqDO.js";import"./createLucideIcon-Bn5Z2gKp.js";import"./useLocalizedStringFormatter-CfCv-5fd.js";import"./Heading-DvcYpWA5.js";import"./info-vmZTkaeh.js";import"./Popover-DOI5S_wf.js";import"./check-DO7Q_IUX.js";import"./useToggleState-CnFR2tm4.js";import"./TextFieldBase-oSRs8dzC.js";import"./Input-DRNfRwEn.js";import"./useTextField-6JknOgh-.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CLBsp5-e.js";import"./DragAndDrop-sIEvwl-t.js";import"./inertValue-hMe3iOCz.js";import"./useListState-ChvFTXbe.js";import"./TagGroup-BTH3VA6Q.js";import"./useHighlightSelectionDescription-BCYjtjJE.js";import"./useUpdateEffect-vp2ruFlK.js";import"./useHasTabbableChild-luGRxQmE.js";import"./chevron-down-DFGbkwHp.js";import"./Virtualizer-Dw1MUGnH.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
