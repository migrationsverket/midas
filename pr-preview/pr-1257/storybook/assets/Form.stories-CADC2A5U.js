import{j as e}from"./iframe-BE6opBBQ.js";import{c}from"./Form-BxafmMzb.js";import{G as d}from"./Grid-BbUJ6VNA.js";import{G as i}from"./GridItem-BKhetcV3.js";import{a as x,R as u}from"./Radio-B7WtHs_z.js";import{C as I}from"./CheckboxGroup-DLPEsJjz.js";import{C as G}from"./Checkbox-0UpU7gGh.js";import{T as t}from"./TextField-Catzbesd.js";import{S as l}from"./Select-BeALKYGF.js";import{L as p}from"./ListBoxItem-DV3rBR2D.js";import{B as a}from"./Button-C8N-CVIU.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-B2vnni9l.js";import"./utils-C8ofSvVg.js";import"./clsx-B-dksMZM.js";import"./index-DAQ_HM4b.js";import"./index-yi7QOzex.js";import"./clsx-Ciqy0D92.js";import"./Group-DRgvDqS1.js";import"./FieldError-rh0vxGNi.js";import"./Text-DssX7oue.js";import"./Text-DXKcxlic.js";import"./Button-33q5ghqc.js";import"./Hidden-ZOBOpRNs.js";import"./useLabel-DYb1uAYa.js";import"./useLabels-CTwsRaEG.js";import"./useButton-Ds0Hb-Tu.js";import"./SelectionIndicator-DIMhBzC8.js";import"./useField-Dwn3J9rA.js";import"./VisuallyHidden-TQ9t5iSG.js";import"./useControlledState-DKq-QKGp.js";import"./Label-Yz5OXnCM.js";import"./Dialog-DryXQOzK.js";import"./RSPContexts-D18522_R.js";import"./OverlayArrow-D_lM7QjR.js";import"./useResizeObserver-J_5HhmcL.js";import"./Collection-BDfNZ04v.js";import"./index-DBqXhfdp.js";import"./Separator-BABspNhk.js";import"./SelectionManager-DcfHF2BT.js";import"./useEvent-Df4XmH1c.js";import"./scrollIntoView-CGjnRAcf.js";import"./useDescription-Cm-6_l4m.js";import"./ListKeyboardDelegate--moD0RsY.js";import"./PressResponder-DODdLQvF.js";import"./useLocalizedStringFormatter-D7yAGsCf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-GI6DuVjb.js";import"./getScrollParent-B6ANYB0N.js";import"./ModalOverlay-B7NE_JCn.js";import"./x-D6OAu6QL.js";import"./createLucideIcon-BCuYuRMM.js";import"./useLocalizedStringFormatter-CwdjWiaw.js";import"./Heading-BmRPyc3t.js";import"./info-CT26aLst.js";import"./Popover-Dvze6mIn.js";import"./check-YAuxHrNr.js";import"./useToggleState-DxwtfNo9.js";import"./TextFieldBase-BK7IgFsG.js";import"./Input-C-66vJoQ.js";import"./useTextField-C_muvX0L.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CU8nq9od.js";import"./DragAndDrop-Cp2FwKKQ.js";import"./inertValue-RNQckmmi.js";import"./useListState-B_kWN90t.js";import"./TagGroup-BqaGyZ-k.js";import"./useHighlightSelectionDescription-D1w7wXmt.js";import"./useUpdateEffect-CQFKIiCd.js";import"./useHasTabbableChild-BSNdlZRd.js";import"./chevron-down-p5SNk3DU.js";import"./Virtualizer-BihlPJs2.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
