import{j as e}from"./iframe-BvxrP4H_.js";import{$ as c}from"./Form-CWCyzf8u.js";import{G as d}from"./Grid-4ExBieNu.js";import{G as i}from"./GridItem-BCuRvo51.js";import{T as t}from"./TextField-BqvPVAw4.js";import{S as l}from"./Select-BvQDLBcA.js";import{B as a}from"./Button-A9AEz-p5.js";import{R as x,a as u}from"./Radio-BoMfDIAK.js";import{C as I}from"./CheckboxGroup-ts89xeD4.js";import{C as G}from"./Checkbox-D0pa2blO.js";import{L as p}from"./ListBoxItem-C14zK1Se.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DRwSYmkY.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DHvoEVhR.js";import"./useFocusRing-CJdHKEcp.js";import"./index-DZ-u2hu8.js";import"./index-D44wzwBB.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-mKCjkZ7T.js";import"./TextField-CERuDnI1.js";import"./FieldError-D1Yw6ERp.js";import"./Text-BJUv6RK-.js";import"./Text-DeMAVr2b.js";import"./RSPContexts-DEykMfDO.js";import"./Group-DA7-pBdr.js";import"./Input-C57YTRQw.js";import"./Hidden-D4jsxrLb.js";import"./Button-BEiciYfb.js";import"./useLabels-BMmbJ9_b.js";import"./useButton-uALjNSWo.js";import"./useTextField-CaBalM21.js";import"./useControlledState-D2EAi2j4.js";import"./useField-BpVbfcEn.js";import"./TextField.module-1fNSVGjT.js";import"./Label-kaeiWxa8.js";import"./Dialog-BntEtIwp.js";import"./OverlayArrow-DUojjDUB.js";import"./useResizeObserver-BdXrzxcT.js";import"./Collection-BnA9gHIE.js";import"./index-DMqlofMa.js";import"./Separator-e71TDoZM.js";import"./SelectionManager-BH5HcElr.js";import"./useEvent-CgFksn0F.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-pSPS3JIv.js";import"./useDescription-CWz-Nrf1.js";import"./ListKeyboardDelegate-DbICXpzW.js";import"./PressResponder-D8B4OF2M.js";import"./useLocalizedStringFormatter-D4pCyGYe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DQJawZVf.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BJsqer9T.js";import"./x-DSnh6kAd.js";import"./createLucideIcon-B5KIjSHM.js";import"./useLocalizedStringFormatter-B_Mu1zyu.js";import"./Heading-Gcv-n3NK.js";import"./info-C7XqbetH.js";import"./Popover-CXyOYptn.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BVzBAvdL.js";import"./DragAndDrop-BJIlDuTE.js";import"./inertValue-BLaMpHK-.js";import"./useListState-CG-YQ8jx.js";import"./Tag-BE077OcH.js";import"./useHighlightSelectionDescription-oTOpQEIQ.js";import"./useUpdateEffect-B-dKDf-G.js";import"./useHasTabbableChild-ClJ97CT8.js";import"./chevron-down-B2_XnzKs.js";import"./Button.module-Co5e5YHp.js";import"./check-B34nOuLp.js";import"./useToggleState-D8g27Ds2.js";import"./Virtualizer-CiM_d3ps.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
