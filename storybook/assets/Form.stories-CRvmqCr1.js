import{j as e}from"./iframe-Dl4LNfFt.js";import{c}from"./Form-BW3kbuFu.js";import{G as d}from"./Grid-CA3zKS20.js";import{G as i}from"./GridItem-BvP_Fydg.js";import{a as x,R as u}from"./Radio-BSxqN-IN.js";import{C as I}from"./CheckboxGroup-CXDXeLNT.js";import{C as G}from"./Checkbox-3nmmTNzm.js";import{T as t}from"./TextField-BB9IG_PT.js";import{S as l}from"./Select-B8B1a9ax.js";import{L as p}from"./ListBoxItem-DOvTt1eg.js";import{B as a}from"./Button-CE6ptzle.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DBInQ3ih.js";import"./utils-zoe11Nhs.js";import"./clsx-B-dksMZM.js";import"./index-B4dlJKhH.js";import"./index-DfhqQ-fy.js";import"./clsx-Ciqy0D92.js";import"./Group-Dbz0NB1G.js";import"./FieldError-D8UkVWbY.js";import"./Text-P-m_usmt.js";import"./Text-htVbAu9h.js";import"./Button-1ORHN5ed.js";import"./Hidden-qMhe2ll1.js";import"./useLabel-BMyaEN82.js";import"./useLabels-D1nLqhyh.js";import"./useButton-B3ilWFtn.js";import"./SelectionIndicator-BOl6pKjd.js";import"./useField-Bt07QuwG.js";import"./VisuallyHidden-CI441pyr.js";import"./useControlledState-CyH9azIX.js";import"./Label-CZ0JfQMw.js";import"./Dialog-DPGx9omw.js";import"./RSPContexts-4lSoz9P-.js";import"./OverlayArrow-DLh9Tp41.js";import"./useResizeObserver-CvCvp2Tt.js";import"./Collection-Bo8GIdVi.js";import"./index-CDp8Li4l.js";import"./Separator--rhMpA_n.js";import"./SelectionManager-Dd8kFD9H.js";import"./useEvent-BlUZThVq.js";import"./scrollIntoView-B7KTALk8.js";import"./useDescription-ccYB2Tbm.js";import"./ListKeyboardDelegate-BwRHOVKV.js";import"./PressResponder-4D9BL6pn.js";import"./useLocalizedStringFormatter-BfzJ7Wkp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-InBdBZ0D.js";import"./getScrollParent-CRvNPk_3.js";import"./ModalOverlay-DW1iRgTe.js";import"./x-BosK2Sg6.js";import"./createLucideIcon-1sQySh6M.js";import"./useLocalizedStringFormatter-BHmmo-Zt.js";import"./Heading-DMV6k00x.js";import"./info-CCg9E48S.js";import"./Popover-CjC4abvw.js";import"./check-DbUEPk8b.js";import"./useToggleState-DrjK-n7i.js";import"./TextFieldBase-DQj-O_2L.js";import"./Input-DBRGGN3r.js";import"./useTextField-ByuWxfp6.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-0UibdI7V.js";import"./DragAndDrop-Cs6Vxq5D.js";import"./inertValue-Bwq7Qojv.js";import"./useListState-a1dnRb9Z.js";import"./TagGroup-DHrft0ps.js";import"./useHighlightSelectionDescription-DFJx1zXg.js";import"./useUpdateEffect-BtbLsE_r.js";import"./useHasTabbableChild-CL8GuM8h.js";import"./chevron-down-DSgYwsLb.js";import"./Virtualizer-1mhtdECI.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
