import{j as e}from"./iframe-6VRTlOeH.js";import{c}from"./Form-3fhL1Dx2.js";import{G as d}from"./Grid-C5mrqwvx.js";import{G as i}from"./GridItem-Cgr4uRmS.js";import{a as x,R as u}from"./Radio-BUxQZ8Zs.js";import{C as I}from"./CheckboxGroup-BriEfS8u.js";import{C as G}from"./Checkbox-CRsNwclq.js";import{T as t}from"./TextField-C789DQ62.js";import{S as l}from"./Select-CNZVt8cL.js";import{L as p}from"./ListBoxItem-D-VXDOo-.js";import{B as a}from"./Button-CQiZspsF.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DGxSfNEF.js";import"./utils-0kxM0y8Y.js";import"./clsx-B-dksMZM.js";import"./index-DuM1IAo7.js";import"./index-BfAN20ZA.js";import"./clsx-Ciqy0D92.js";import"./Group-BXWl5BNG.js";import"./FieldError-BjyVB-H9.js";import"./Text-CpKvHOvq.js";import"./Text-BxBOqGEA.js";import"./Button-DLPX01E3.js";import"./Hidden-DlTpFa-B.js";import"./useLabel-BFBWLCR-.js";import"./useLabels-DISBRw-R.js";import"./useButton-Bjmveq-R.js";import"./SelectionIndicator-CCEQFu0T.js";import"./useField-2NJCbeT2.js";import"./VisuallyHidden-BKsZ0nD0.js";import"./useControlledState-pI_U9-IG.js";import"./Label-yhzhs_sD.js";import"./Dialog-Dgx0n_Ye.js";import"./RSPContexts-DRe_RyK6.js";import"./OverlayArrow-DBlOlBI_.js";import"./useResizeObserver-rtx7MB9x.js";import"./Collection-TF1_6_sW.js";import"./index-M8MoRKxx.js";import"./Separator-Drv2w8La.js";import"./SelectionManager-CrHNXkN6.js";import"./useEvent-CA01mw1x.js";import"./scrollIntoView-BdAgwM8B.js";import"./useDescription-VsZXCutT.js";import"./ListKeyboardDelegate-ZFjtCWQm.js";import"./PressResponder-NzJgLDPG.js";import"./useLocalizedStringFormatter-Tc4ujGE7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-8ekBFdXr.js";import"./getScrollParent-HQ76BiU1.js";import"./ModalOverlay-CXH0sLQA.js";import"./x-CG_c6zFF.js";import"./createLucideIcon-LiZfCQUd.js";import"./useLocalizedStringFormatter-BuRCkwwi.js";import"./Heading-OsMCcv5f.js";import"./info-DRnlA33R.js";import"./Popover-DMTLs5MJ.js";import"./check-GrQ7aBJH.js";import"./useToggleState-CJ8qU7CY.js";import"./TextFieldBase-rY7jnSYm.js";import"./Input-t6CEBuf7.js";import"./useTextField-CxYO2c75.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BUk82wVk.js";import"./DragAndDrop-CSz4WO9Y.js";import"./inertValue-D0X9MpTx.js";import"./useListState-CHcFWOlz.js";import"./TagGroup-CZsZ2-2q.js";import"./useHighlightSelectionDescription-CmsTaueR.js";import"./useUpdateEffect-DQolT4VD.js";import"./useHasTabbableChild-BybRNQGU.js";import"./chevron-down-LQyTNPLc.js";import"./Virtualizer-BCrDshCj.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
