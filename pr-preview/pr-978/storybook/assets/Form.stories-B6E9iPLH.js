import{j as e}from"./iframe-DjgIrgXx.js";import{$ as c}from"./Form-Bxv_fhkT.js";import{G as d}from"./Grid-Dq2fSbP0.js";import{G as i}from"./GridItem-B7gCyRo4.js";import{T as t}from"./TextField-C7uWCWBc.js";import{S as l}from"./Select-CPd1JS0v.js";import{B as a}from"./Button-jAm1QGD3.js";import{R as x,a as u}from"./Radio-C4FlUno3.js";import{C as I}from"./CheckboxGroup-gsjD18uC.js";import{C as G}from"./Checkbox-BoSBTcPB.js";import{L as p}from"./ListBoxItem-DTytv7EG.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D2kAasoR.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B95EVcBX.js";import"./useFocusRing-B_HSwrPF.js";import"./index-D1Un5PzA.js";import"./index-CF8FLkGf.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-B6MEZAlb.js";import"./TextField-Brzwr1Dd.js";import"./FieldError-B5gp4YY1.js";import"./Text-BGE_6lk2.js";import"./Text-CKRJVtbY.js";import"./RSPContexts-0C0uUEQ2.js";import"./Group-BPQKqBIp.js";import"./Input-DsIaAekr.js";import"./Hidden-BNyl_2c1.js";import"./Button-B_QLJXSL.js";import"./useLabels-B0sW_9bm.js";import"./useButton-ulDAvSC9.js";import"./useTextField-FQC1R6st.js";import"./useControlledState-BGQ28pQk.js";import"./useField-BEk04EZe.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DeNs-xsM.js";import"./Dialog-gvafznn6.js";import"./OverlayArrow-D4QZql7S.js";import"./useResizeObserver-kPAOyD_0.js";import"./Collection-dbfWO7w2.js";import"./index-CTLvk_Ni.js";import"./Separator-CskRIG8r.js";import"./SelectionManager-BdyrTUfQ.js";import"./useEvent-BWCG7k4D.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DN5e2gw-.js";import"./useDescription-DRcT1wYK.js";import"./ListKeyboardDelegate-3JnnFncg.js";import"./PressResponder-Bm-crihQ.js";import"./useLocalizedStringFormatter-O_Q9rGTo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BhPQhKxR.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BkzPV6ob.js";import"./x-Dgi5qKkD.js";import"./createLucideIcon-B3OWVXDd.js";import"./useLocalizedStringFormatter-D_-NNNwN.js";import"./Heading-DtdFzrUy.js";import"./info-B5Nzwjpy.js";import"./Popover-CHBkMWVf.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DQB5cMvJ.js";import"./DragAndDrop-rl9qUWaJ.js";import"./inertValue-B0ZuZL-i.js";import"./useListState-B_WVxydO.js";import"./Tag-Lk922Uvq.js";import"./useHighlightSelectionDescription-DHRncNrw.js";import"./useUpdateEffect-DoDec-wm.js";import"./useHasTabbableChild-D5mpNkIY.js";import"./chevron-down-evwnXRs3.js";import"./Button.module-Co5e5YHp.js";import"./check-5r6_cTpU.js";import"./useToggleState-CqZke7EY.js";import"./Virtualizer-kSPPogxu.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
