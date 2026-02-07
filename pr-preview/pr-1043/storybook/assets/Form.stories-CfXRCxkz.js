import{j as e}from"./iframe-CuWNjTRb.js";import{$ as c}from"./Form-BeXtLCxi.js";import{G as d}from"./Grid-C-SxG9TR.js";import{G as i}from"./GridItem-yAUH8__J.js";import{a as x,R as u}from"./Radio-NUmSdFBs.js";import{C as I}from"./CheckboxGroup-Dk_NE9Zk.js";import{C as G}from"./Checkbox-Pt4DIb0C.js";import{T as t}from"./TextField-DeNefete.js";import{S as l}from"./Select-oF-bOjiZ.js";import{L as p}from"./ListBoxItem-D24TJI6w.js";import{B as a}from"./Button-xnDb1Lqn.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-bTshPwuy.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D4Myy34u.js";import"./useFocusRing-BOU0QdDc.js";import"./index-BVMh-c2E.js";import"./index-BG9E7EvN.js";import"./clsx-Ciqy0D92.js";import"./Group-Dhmi-0Zl.js";import"./FieldError-DPMeHFzQ.js";import"./Text-YALf1zl3.js";import"./Text-nCheY5Fg.js";import"./Button-DcYqIknv.js";import"./Hidden-CC5A1H5b.js";import"./useLabels-Z2fhjGWT.js";import"./useButton-CheLbNvO.js";import"./SelectionIndicator-BKZlEmjT.js";import"./useField-BQlDoErg.js";import"./VisuallyHidden-BJty33Lz.js";import"./useControlledState-JaG_E2x3.js";import"./Label-D33s1NFV.js";import"./Dialog-C1N1-NMW.js";import"./RSPContexts-BKEbUSq3.js";import"./OverlayArrow-DUDD-sla.js";import"./useResizeObserver-DBJKVC2-.js";import"./Collection-DcW90qW7.js";import"./index-BA03wPss.js";import"./Separator-Cra6whlh.js";import"./SelectionManager-D08BgZnb.js";import"./useEvent-MAJC2drM.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BnU31H3h.js";import"./ListKeyboardDelegate-2SqsKb6i.js";import"./PressResponder-BbRZjAYy.js";import"./useLocalizedStringFormatter-DE24hlzI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cd_h8R4s.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-Br7Dc4zV.js";import"./createLucideIcon-CyYJB5cI.js";import"./useLocalizedStringFormatter-DDPSUyK3.js";import"./Heading-5XGAzLHj.js";import"./info-DGHQsG-7.js";import"./Popover-CktEKB3B.js";import"./check-B3WwXTK5.js";import"./useToggleState-DTKZhdod.js";import"./TextFieldBase-C4FBY_bl.js";import"./TextField-Ibhntev7.js";import"./Input-5lcn_VCv.js";import"./useTextField-yeu2J9nc.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DpEhI6Gz.js";import"./DragAndDrop-C6A23kPv.js";import"./inertValue-Bt7W3oou.js";import"./useListState-D6TtLOtj.js";import"./Tag-BJEI6Jms.js";import"./useHighlightSelectionDescription-nQ8EaeHY.js";import"./useUpdateEffect-DpHPQ8i-.js";import"./useHasTabbableChild-Y097T-Or.js";import"./chevron-down-E5W2O87f.js";import"./Virtualizer-DyJxjc7_.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
