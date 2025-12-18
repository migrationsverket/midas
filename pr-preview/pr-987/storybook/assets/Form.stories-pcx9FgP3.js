import{j as e}from"./iframe-BGmArfkm.js";import{$ as c}from"./Form-Zs0i40lL.js";import{G as d}from"./Grid-CHErcSUl.js";import{G as i}from"./GridItem-BFhx_YWj.js";import{T as t}from"./TextField-BJm53F1U.js";import{S as l}from"./Select-Bv_ne2eD.js";import{B as a}from"./Button-Cxuv1_BK.js";import{R as x,a as u}from"./Radio-CylbecX5.js";import{C as I}from"./CheckboxGroup-4Mkfpwmt.js";import{C as G}from"./Checkbox-CsNp9rsM.js";import{L as p}from"./ListBoxItem-Dwe1t6ga.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-De4ycVjz.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BTe4d6Fg.js";import"./useFocusRing-C96cr3fv.js";import"./index-Vx53ryqG.js";import"./index-DH2xrgDV.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-C5UKv90t.js";import"./TextField-BPftMEDf.js";import"./FieldError-DWc1oqeh.js";import"./Text-Co2FLqMe.js";import"./Text-B-cFjb91.js";import"./RSPContexts-DnW8w3g2.js";import"./Group-BgvziObq.js";import"./Input-DKuK_puF.js";import"./Hidden-ZdYniLBZ.js";import"./Button-Bt35FmAc.js";import"./useLabels-cL2sXBBB.js";import"./useButton-xm0K22zA.js";import"./useTextField-D13rIumx.js";import"./useControlledState-C49VPy3O.js";import"./useField-C7c7y-kS.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-B-Oa0qYx.js";import"./Dialog-qnlt5s6o.js";import"./OverlayArrow-Ci79LVIw.js";import"./useResizeObserver-UOPaRJCF.js";import"./Collection-COsQU16t.js";import"./index-CxoXiRnj.js";import"./Separator-BvW5t8ps.js";import"./SelectionManager-BNjJJ1kE.js";import"./useEvent-I3liNdnB.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D_bMrYtf.js";import"./useDescription-D2ktPnwX.js";import"./ListKeyboardDelegate--aVejvH8.js";import"./PressResponder-GANqwSyG.js";import"./useLocalizedStringFormatter-DYenXjtl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BCKrBNch.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C6Hru1_9.js";import"./x-U65q5NmZ.js";import"./createLucideIcon-gRAp1Zbc.js";import"./useLocalizedStringFormatter-BOskpLKS.js";import"./Heading-D4Y8bukS.js";import"./info-2_jsZBv5.js";import"./Popover-BlprJ_dr.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D7HC4Xjl.js";import"./DragAndDrop-aB54Yyfn.js";import"./inertValue-DW0rP1E8.js";import"./useListState-BckpI9Pk.js";import"./Tag-Dt2-fm2D.js";import"./useHighlightSelectionDescription-BT4pBN9C.js";import"./useUpdateEffect-CnuKQKAd.js";import"./useHasTabbableChild-BrzIo61e.js";import"./chevron-down-Cp4Sri6R.js";import"./Button.module-CIvIJ45H.js";import"./check-BNLaQJG8.js";import"./useToggleState-B0glaE6Z.js";import"./Virtualizer-Bi2DX09Z.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
