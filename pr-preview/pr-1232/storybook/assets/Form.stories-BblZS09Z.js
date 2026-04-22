import{j as e}from"./iframe-9MdBivRm.js";import{c}from"./Form-Crvut_kx.js";import{G as d}from"./Grid-tJj_ddhk.js";import{G as i}from"./GridItem-DQqi-lhL.js";import{a as x,R as u}from"./Radio-DcdCnA8J.js";import{C as I}from"./CheckboxGroup-C8FrmxiO.js";import{C as G}from"./Checkbox-DQ-BVXcV.js";import{T as t}from"./TextField-DMIfYcZi.js";import{S as l}from"./Select-B9g_5xTy.js";import{L as p}from"./ListBoxItem-BidPniWP.js";import{B as a}from"./Button-oaXlsJtI.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-r9TCofSe.js";import"./utils-Bn94QCjx.js";import"./clsx-B-dksMZM.js";import"./index-Cx-gCRg0.js";import"./index-CYPjKd3_.js";import"./clsx-Ciqy0D92.js";import"./Group-DyeXIgcv.js";import"./FieldError-C2tntPOB.js";import"./Text-DqogYLWC.js";import"./Text-B_WlxrH5.js";import"./Button-CB5roEUk.js";import"./Hidden-mlaG9dyz.js";import"./useLabel-DJ2FRaty.js";import"./useLabels-BVQx-2qb.js";import"./useButton-9AsuX9J0.js";import"./SelectionIndicator-BAejuz9T.js";import"./useField-B-NHG1Dy.js";import"./VisuallyHidden-B5GjKkS-.js";import"./useControlledState-DASGxOGH.js";import"./Label-Bs41Ym4u.js";import"./Dialog-DaF6TB58.js";import"./RSPContexts-yk-QUR19.js";import"./OverlayArrow-CqrmYGFz.js";import"./useResizeObserver-CZjLM8fY.js";import"./Collection-DOip7Or5.js";import"./index-dnLCjEtw.js";import"./Separator-TmOyzQOi.js";import"./SelectionManager-BfxyxeUx.js";import"./useEvent-CzJ1Xvo0.js";import"./scrollIntoView--qBAJMrU.js";import"./useDescription-u6RsoVs5.js";import"./ListKeyboardDelegate-BTGk-Kg0.js";import"./PressResponder-CblWJY4v.js";import"./useLocalizedStringFormatter-BqBDGzJt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DAWiQObg.js";import"./getScrollParent-B8busNPw.js";import"./ModalOverlay-LJAR0MMG.js";import"./x-m6itTsWf.js";import"./createLucideIcon-w3wG1Pu8.js";import"./useLocalizedStringFormatter-BF9QVzFe.js";import"./Heading-CyZPaCxb.js";import"./info-B6K8NiBh.js";import"./Popover-tdWd4ACh.js";import"./check-Cg0GVAjN.js";import"./useToggleState-Cd_5kGms.js";import"./TextFieldBase-J3M81N3e.js";import"./Input-BRdi36Yt.js";import"./useTextField-C6LMpBsJ.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-qZdNkmk_.js";import"./DragAndDrop-BPWAYmSo.js";import"./inertValue-CQ9WNGVi.js";import"./useListState-COOJtTUl.js";import"./TagGroup-Dowgfeea.js";import"./useHighlightSelectionDescription-CFw_LKiK.js";import"./useUpdateEffect-D67O-OBM.js";import"./useHasTabbableChild-CO2yoKK4.js";import"./chevron-down-D5bufupm.js";import"./Virtualizer-Dhk9jn8L.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
