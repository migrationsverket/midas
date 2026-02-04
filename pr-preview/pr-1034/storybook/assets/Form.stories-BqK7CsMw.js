import{j as e}from"./iframe-upcgl7eM.js";import{$ as c}from"./Form-D19yNL9c.js";import{G as d}from"./Grid-D_qHg2qm.js";import{G as i}from"./GridItem-U1A6VgdN.js";import{a as x,R as u}from"./Radio-CLH-mfQY.js";import{C as I}from"./CheckboxGroup-hSbjVtXO.js";import{C as G}from"./Checkbox-C8taor_O.js";import{T as t}from"./TextField-CCr5OUWd.js";import{S as l}from"./Select-VFzW37ZY.js";import{L as p}from"./ListBoxItem-zCdzrb81.js";import{B as a}from"./Button-D6mILSsj.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DIx1IamT.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Cwb3rUYJ.js";import"./useFocusRing-BqsA1vx-.js";import"./index-BuYUjQXP.js";import"./index-SbvGQsJp.js";import"./clsx-Ciqy0D92.js";import"./Group-rRuLZDs-.js";import"./FieldError-_edkh_FM.js";import"./Text-4DZ9uLvx.js";import"./Text-vUmVOUpM.js";import"./Button-Bm_96dJ2.js";import"./Hidden-BVPjc43X.js";import"./useLabels-CZlpXa7M.js";import"./useButton-DXi2-Ij4.js";import"./SelectionIndicator-BL7yS6W5.js";import"./useField-Vj9LyZT-.js";import"./VisuallyHidden-CruDu4Gn.js";import"./useControlledState-DxbIPEYQ.js";import"./Label-B1SiNrFI.js";import"./Dialog-DirbhgUz.js";import"./RSPContexts-B8fjskTn.js";import"./OverlayArrow-DxvCU2Fz.js";import"./useResizeObserver-_n1lKi44.js";import"./Collection-CR_ONP3f.js";import"./index-DClodtP5.js";import"./Separator-BO1A8x86.js";import"./SelectionManager-CjhZccZY.js";import"./useEvent-oippFPIE.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B7RZGwxx.js";import"./ListKeyboardDelegate-CIBYFWRq.js";import"./PressResponder-BoZqndGc.js";import"./useLocalizedStringFormatter-B_89sXt0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ngvn7jp2.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CWmj5Rac.js";import"./createLucideIcon-NdGz0Ptw.js";import"./useLocalizedStringFormatter-XLs9F4JA.js";import"./Heading-BkDIPQhc.js";import"./info-CouqQb4i.js";import"./Popover-Cot2bbrT.js";import"./check-bkr22Hg3.js";import"./useToggleState-BGgRPG3e.js";import"./TextFieldBase-BDmIFEbe.js";import"./TextField-CwTKWCmR.js";import"./Input-jLib92a1.js";import"./useTextField-C0go8Gbu.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CsglKppc.js";import"./DragAndDrop-d1Crg52e.js";import"./inertValue-BZritUBy.js";import"./useListState-DADLmtAN.js";import"./Tag-KBMTVR79.js";import"./useHighlightSelectionDescription-BLRX37qu.js";import"./useUpdateEffect-BEm6biyu.js";import"./useHasTabbableChild-Bl8OXUx8.js";import"./chevron-down-Dbd0F7BW.js";import"./Virtualizer-C8CdV5BB.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
