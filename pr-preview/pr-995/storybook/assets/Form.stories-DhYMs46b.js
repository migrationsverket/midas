import{j as e}from"./iframe-DSpa0ZJj.js";import{$ as c}from"./Form-Dv_gbss9.js";import{G as d}from"./Grid-C5ot41Wd.js";import{G as i}from"./GridItem-B0NGorPV.js";import{T as t}from"./TextField-BOYQrEdC.js";import{S as l}from"./Select-CduQDRtS.js";import{B as a}from"./Button-Cdop71cL.js";import{R as x,a as u}from"./Radio-D_RjKA3Q.js";import{C as I}from"./CheckboxGroup-CKuYLX7A.js";import{C as G}from"./Checkbox-DcMTKE9s.js";import{L as p}from"./ListBoxItem-Bqp_UhEW.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-W7NKEzNd.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CjcOfkDV.js";import"./useFocusRing-CHFIxq0S.js";import"./index-Bm634ACX.js";import"./index-JwgIIJLt.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-B7J1Mm2C.js";import"./TextField-8b76IOT-.js";import"./FieldError-D4Zul2ht.js";import"./Text-B4__o0ew.js";import"./Text-CuC4lmi7.js";import"./RSPContexts-2cznPi_5.js";import"./Group-BYnvDdUg.js";import"./Input-DE2XmOKq.js";import"./Hidden-Bn_hIWKG.js";import"./Button-Cz-z0Ko6.js";import"./useLabels-CCN5xeFd.js";import"./useButton-Cu2rmCSH.js";import"./useTextField-D7518Y8T.js";import"./useControlledState-BWGhdnzP.js";import"./useField-9lqyMP1q.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CLdqKwxR.js";import"./Dialog-CMq55Z-e.js";import"./OverlayArrow-CLQA0CkX.js";import"./useResizeObserver-DgjxG9y-.js";import"./Collection-CEfcI50-.js";import"./index-NlZ_eQUJ.js";import"./Separator-Bnm9Uc2X.js";import"./SelectionManager-BYs5lwPs.js";import"./useEvent-DSFx2P8Q.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DuprrKW2.js";import"./useDescription-Q359T3QE.js";import"./ListKeyboardDelegate-Bo5tVIdv.js";import"./PressResponder-MvkeKqfc.js";import"./useLocalizedStringFormatter-20jVmx8j.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BRkukhdB.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-8eYS4FK5.js";import"./x-CuWMoefh.js";import"./createLucideIcon-DKtiU0kB.js";import"./useLocalizedStringFormatter-DPq-0JGc.js";import"./Heading-PeB1jTB-.js";import"./info-DbyNtn0b.js";import"./Popover-D_e9Y71-.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CQQiW7Do.js";import"./DragAndDrop-B0jIt7xh.js";import"./inertValue-D3zwrmLL.js";import"./useListState-CdzjBS8C.js";import"./Tag-B4qdIrLw.js";import"./useHighlightSelectionDescription-DojfwD2R.js";import"./useUpdateEffect-DU3oi-Z_.js";import"./useHasTabbableChild-xtsSGniz.js";import"./chevron-down-BiALDfgq.js";import"./Button.module-Co5e5YHp.js";import"./check-CTluUwjw.js";import"./useToggleState-BqrS2Hj3.js";import"./Virtualizer-BFu_K7MK.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
