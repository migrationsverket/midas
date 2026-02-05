import{j as e}from"./iframe-Da7nq29g.js";import{$ as c}from"./Form-D9xjglpP.js";import{G as d}from"./Grid-DBq_KAhW.js";import{G as i}from"./GridItem-D7G_Gj87.js";import{a as x,R as u}from"./Radio-btS9uXxk.js";import{C as I}from"./CheckboxGroup-N5XLRQ9w.js";import{C as G}from"./Checkbox-CxY7wjHN.js";import{T as t}from"./TextField-D5WfpsrQ.js";import{S as l}from"./Select-CJXszLl8.js";import{L as p}from"./ListBoxItem-BBAtxIVX.js";import{B as a}from"./Button-BlivHiUN.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B0CyUW-5.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-TJjpFVH5.js";import"./useFocusRing-BfWaxzv3.js";import"./index-Chz3wJrr.js";import"./index-BQQ1R4UO.js";import"./clsx-Ciqy0D92.js";import"./Group-BfYcRD1W.js";import"./FieldError-N_3bhSnW.js";import"./Text-BYaoYc1H.js";import"./Text-BQLX2n4Y.js";import"./Button-CtgdX1q6.js";import"./Hidden-DRaikK2a.js";import"./useLabels-uo9Op09U.js";import"./useButton-DItgdLXo.js";import"./SelectionIndicator-73xE8EMW.js";import"./useField-D5pIHEIl.js";import"./VisuallyHidden-DaXw9Zgt.js";import"./useControlledState-DqL64D7D.js";import"./Label-B5hFansb.js";import"./Dialog-BNTDZ4sx.js";import"./RSPContexts-CA4TT0Pe.js";import"./OverlayArrow-BLgifpcW.js";import"./useResizeObserver-CwtpUuD9.js";import"./Collection-C71fexbD.js";import"./index-Ck07IVt1.js";import"./Separator-BuSY1b1y.js";import"./SelectionManager-BQXF1WZ2.js";import"./useEvent-Dtm5G7ur.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-VrbZdKT0.js";import"./ListKeyboardDelegate-i42XoEpM.js";import"./PressResponder-BnGFuSGl.js";import"./useLocalizedStringFormatter-CdeSJGSi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DyxF6Fwu.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BfVUye5v.js";import"./createLucideIcon-DXCReTis.js";import"./useLocalizedStringFormatter-B5xCdXuP.js";import"./Heading-BbtFBKJu.js";import"./info-BuyWfxI0.js";import"./Popover-Cp3vv8Pj.js";import"./check-BjDx6IDg.js";import"./useToggleState-TEB3Vjy4.js";import"./TextFieldBase-IsVs29nA.js";import"./TextField-CGruB-Jr.js";import"./Input-BRxZ-cQ2.js";import"./useTextField-KyGlqxDh.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-nzd2B6bT.js";import"./DragAndDrop-D1NpaDxD.js";import"./inertValue-XRkpzllw.js";import"./useListState-mFjiLqTg.js";import"./Tag-ckiOPdlL.js";import"./useHighlightSelectionDescription-s32Jm17Z.js";import"./useUpdateEffect-C8R919p5.js";import"./useHasTabbableChild-BVLF7yzS.js";import"./chevron-down-Dtno_S9h.js";import"./Virtualizer-eAj6M3kr.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
