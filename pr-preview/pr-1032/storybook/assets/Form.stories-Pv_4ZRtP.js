import{j as e}from"./iframe-DRirf2Ys.js";import{$ as c}from"./Form-DDOtMx66.js";import{G as d}from"./Grid-dpn1wVtV.js";import{G as i}from"./GridItem-LuLScYop.js";import{T as t}from"./TextField-vR9IGy8A.js";import{S as l}from"./Select-Vy3WBv7G.js";import{B as a}from"./Button-Bbxz1V1l.js";import{R as x,a as u}from"./Radio-Cuti9Uf1.js";import{C as I}from"./CheckboxGroup-BfYJvB4F.js";import{C as G}from"./Checkbox-CIn_PaKR.js";import{L as p}from"./ListBoxItem-D4c1o_O_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BC-9mfhg.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Dl6NIxjf.js";import"./useFocusRing-CJQJQ7PW.js";import"./index-hP6JGvby.js";import"./index-Drx8rBd8.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DcQBSUx2.js";import"./TextField-BHqkwKOH.js";import"./FieldError-Ciz7MEhw.js";import"./Text-haWdKGMd.js";import"./Text-Cz4JRdhg.js";import"./RSPContexts-BWwgVI6N.js";import"./Group-BxHQ-spB.js";import"./Input-BktJUS29.js";import"./Hidden-lhPivziv.js";import"./Button-kU1Por_z.js";import"./useLabels-Ppos1hYn.js";import"./useButton-Dy4vSFCX.js";import"./useTextField-D0_G5bPN.js";import"./useControlledState-CQDYwQIF.js";import"./useField-CZKO8xFK.js";import"./TextField.module-1fNSVGjT.js";import"./Label-BRVYtrrj.js";import"./Dialog-BDYinEiU.js";import"./OverlayArrow-B_yQtPZQ.js";import"./useResizeObserver-BxtaWTNE.js";import"./Collection-BCdofZC4.js";import"./index-D1bX05Ry.js";import"./Separator-BxU1rSEm.js";import"./SelectionManager-Ba3R1H4j.js";import"./useEvent-D0f8TLM5.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-3e4FMOUn.js";import"./useDescription-DxWGvbMR.js";import"./ListKeyboardDelegate-BniJMMCb.js";import"./PressResponder-DfALHT1f.js";import"./useLocalizedStringFormatter-Czvg_dgK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DnmLPyae.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DEc4J7Zj.js";import"./x-DfCsYV9b.js";import"./createLucideIcon-pFgQkBEQ.js";import"./useLocalizedStringFormatter-C7yUVNG5.js";import"./Heading-BFC8r0ji.js";import"./info-BCZkUAJk.js";import"./Popover-BDl5_dY2.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D6IHErsL.js";import"./DragAndDrop-BoSl09Iv.js";import"./inertValue-ghvyC54Q.js";import"./useListState-Cp4Hjpdp.js";import"./Tag-CgpUI9Dl.js";import"./useHighlightSelectionDescription-Ci79xVoA.js";import"./useUpdateEffect-C6xBX3q5.js";import"./useHasTabbableChild-PFyOj284.js";import"./chevron-down-d0Cqc-_i.js";import"./Button.module-Co5e5YHp.js";import"./check-CjdLraVn.js";import"./useToggleState-BBu3mmRL.js";import"./Virtualizer-BgSY1DBD.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
