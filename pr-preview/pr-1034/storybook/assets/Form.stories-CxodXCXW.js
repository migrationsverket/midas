import{j as e}from"./iframe-CROn2D2x.js";import{$ as c}from"./Form--WL6IsSv.js";import{G as d}from"./Grid-Bm3bSukA.js";import{G as i}from"./GridItem-xRrl4Sge.js";import{a as x,R as u}from"./Radio-DczojxP7.js";import{C as I}from"./CheckboxGroup-DcLZMYMr.js";import{C as G}from"./Checkbox-BgOaTELp.js";import{T as t}from"./TextField-DdID_EX0.js";import{S as l}from"./Select-oGX91tre.js";import{L as p}from"./ListBoxItem-CmLJo_v5.js";import{B as a}from"./Button-tcUqF5wD.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BmCdB7DC.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CuSVA-Sh.js";import"./useFocusRing-DbrQCD6u.js";import"./index-BApTSzNb.js";import"./index-CojDe_Mf.js";import"./clsx-Ciqy0D92.js";import"./Group-Bfzbyhsx.js";import"./FieldError-DOqGfxSh.js";import"./Text-m0OBBvo5.js";import"./Text-p_fXYEUj.js";import"./Button-rTy-r-bM.js";import"./Hidden-B4kaJ98v.js";import"./useLabels-B2-lRjdq.js";import"./useButton-CtKtHL67.js";import"./SelectionIndicator-CeR5295T.js";import"./useField-BAp4yqKh.js";import"./VisuallyHidden-BHGp5XeR.js";import"./useControlledState-Bvh10bMV.js";import"./Label-CJT1-Uy_.js";import"./Dialog-Cw1fKDHF.js";import"./RSPContexts-BXOPS_Ee.js";import"./OverlayArrow-Deu2MDQU.js";import"./useResizeObserver-B6ynseLj.js";import"./Collection-DxKKFJjX.js";import"./index-BoGcMoi7.js";import"./Separator-ytKG-vz9.js";import"./SelectionManager-D69MLAoG.js";import"./useEvent-CCZ-8-DW.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-D384wrOJ.js";import"./ListKeyboardDelegate-DOS933sq.js";import"./PressResponder-GNhMtVyH.js";import"./useLocalizedStringFormatter-B4be551O.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DInQMJQJ.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BxhX1Y1g.js";import"./createLucideIcon-BBVnxcWo.js";import"./useLocalizedStringFormatter-CDmjJZHt.js";import"./Heading-BOPgGtk2.js";import"./info-oXYOsiXz.js";import"./Popover-jYqU0WYI.js";import"./check-CRwQC0VZ.js";import"./useToggleState-BN7j948d.js";import"./TextFieldBase-Br27akGx.js";import"./TextField-Ch5ijD3g.js";import"./Input-C5egksKm.js";import"./useTextField-CSeCUWcb.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-bmD5Ry1H.js";import"./DragAndDrop-DZ9y1iS3.js";import"./inertValue-BBU8Q_l0.js";import"./useListState-CGIuGYD2.js";import"./Tag-BJi4uAIW.js";import"./useHighlightSelectionDescription-DR1NxynZ.js";import"./useUpdateEffect-BYGy_QTQ.js";import"./useHasTabbableChild-BxRgSH0X.js";import"./chevron-down-BGEJm2Mt.js";import"./Virtualizer-jK6IMaoy.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
