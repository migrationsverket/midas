import{j as e}from"./iframe-SsTP6rfd.js";import{$ as c}from"./Form-D1X6lCD7.js";import{G as d}from"./Grid-B5q9PvTT.js";import{G as i}from"./GridItem-m949DmXy.js";import{T as t}from"./TextField-Cyo08V3A.js";import{S as l}from"./Select-CEQoqWX4.js";import{B as a}from"./Button-Bb1EL28B.js";import{R as x,a as u}from"./Radio-DVSLhwBI.js";import{C as I}from"./CheckboxGroup-CvFuZTz6.js";import{C as G}from"./Checkbox-B0ud7Rj3.js";import{L as p}from"./ListBoxItem-D-y6hapR.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-xovjPneb.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BfwjaNDO.js";import"./useFocusRing-CLCXPOxW.js";import"./index-Bcr6E3JC.js";import"./index-LQvR83KO.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-lnRHd4nD.js";import"./TextField-DFYlsbSI.js";import"./FieldError-aNZ3_Z4n.js";import"./Text-BUE0kzAW.js";import"./Text-BYhtQlzN.js";import"./RSPContexts-2kwram0O.js";import"./Group-L9rflH3K.js";import"./Input-CdTpo9oO.js";import"./Hidden-CFG7p1De.js";import"./Button-eerNJBVZ.js";import"./useLabels-CRKcuuZE.js";import"./useButton-BoBFAXLN.js";import"./useTextField-BgiErNeM.js";import"./useControlledState-BXOXeEl0.js";import"./useField-BXKsv6Nk.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DlyznXzy.js";import"./Dialog-COZNtIzJ.js";import"./OverlayArrow-Dxekro-s.js";import"./useResizeObserver-Gf-k7ja1.js";import"./Collection-DeinId22.js";import"./index-DPDwApPx.js";import"./Separator-CBiq70mz.js";import"./SelectionManager-Cvvws_4w.js";import"./useEvent-BTT-Ciqv.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-B2ubSQgL.js";import"./useDescription-Cc-NjIDj.js";import"./ListKeyboardDelegate-QMc0p2wE.js";import"./PressResponder-CGyAUkDY.js";import"./useLocalizedStringFormatter-DeNsFJ4P.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CCa2oAKd.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CwQb82jS.js";import"./x-CbXdnvOX.js";import"./createLucideIcon-B4PKFn84.js";import"./useLocalizedStringFormatter-B9q4ftJk.js";import"./Heading-Bb6ZtnB2.js";import"./info-BQ1pR6Z2.js";import"./Popover-C1AUHTTf.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CTqPpV1D.js";import"./DragAndDrop-BmDAvbmv.js";import"./inertValue-t_DI_F45.js";import"./useListState-DzGRQlac.js";import"./Tag-BqfoTCkg.js";import"./useHighlightSelectionDescription-D709Gry2.js";import"./useUpdateEffect-BiWZPVMm.js";import"./useHasTabbableChild-BYlPgtY5.js";import"./chevron-down-CVbkdWA_.js";import"./Button.module-Co5e5YHp.js";import"./check-BOFYGN1a.js";import"./useToggleState-DFuIi0Ax.js";import"./Virtualizer-BvUahvzZ.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
