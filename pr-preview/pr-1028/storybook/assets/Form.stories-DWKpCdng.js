import{j as e}from"./iframe-QCvgx_6y.js";import{$ as c}from"./Form-IEYrlIsD.js";import{G as d}from"./Grid-ChXZmoJW.js";import{G as i}from"./GridItem-nRHe7nGE.js";import{a as x,R as u}from"./Radio-DFOlZPWa.js";import{C as I}from"./CheckboxGroup-BDa4u9DA.js";import{C as G}from"./Checkbox-BJMMBcw3.js";import{T as t}from"./TextField-BwqrqqWM.js";import{S as l}from"./Select-CT2ovJnH.js";import{L as p}from"./ListBoxItem-Dppiwb0_.js";import{B as a}from"./Button-ttDsw6E6.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C1Mk8uEB.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C1cEITOq.js";import"./useFocusRing-B0xXDhD6.js";import"./index-B-XgGbbB.js";import"./index-DWf5Hj5q.js";import"./clsx-Ciqy0D92.js";import"./Group-BGtGnO5b.js";import"./FieldError-8Gyb2PkQ.js";import"./Text-BvPJ8hQK.js";import"./Text-DMQOF3Hl.js";import"./Button-BpIMXVxv.js";import"./Hidden-DMidg2Il.js";import"./useLabels-BOXfhA_k.js";import"./useButton-Ciq0-AOg.js";import"./SelectionIndicator-DnuZvxPK.js";import"./useField-CbKewwmP.js";import"./VisuallyHidden-stmDuLKZ.js";import"./useControlledState-DePuPBqi.js";import"./Label-6IgSZlU3.js";import"./Dialog-CrRitACG.js";import"./RSPContexts-DXnSMn-5.js";import"./OverlayArrow-Ci467ZI8.js";import"./useResizeObserver-CYYCihTH.js";import"./Collection-C0k5FBtb.js";import"./index-Bvu9lRJ-.js";import"./Separator-BWnHs4uj.js";import"./SelectionManager-zHjCt-B6.js";import"./useEvent-Cxfz3n5z.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Cvonpwl1.js";import"./ListKeyboardDelegate-BNBe2yba.js";import"./PressResponder-DJOTPI-4.js";import"./useLocalizedStringFormatter-uw_CdbjJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-HY4MpFOo.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-36BuEWll.js";import"./createLucideIcon-CpnVUy3d.js";import"./useLocalizedStringFormatter-OgryoDOo.js";import"./Heading-CwLsWtxP.js";import"./info-BGfsj2za.js";import"./Popover-Cu6zpQa_.js";import"./check-GLCaymJB.js";import"./useToggleState-DpwcKeWW.js";import"./TextFieldBase-C2OquJHr.js";import"./TextField-BWCOpB9I.js";import"./Input-FiLcJcL9.js";import"./useTextField-duDZLEnu.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CJ8iveCf.js";import"./DragAndDrop-tDODiA6_.js";import"./inertValue-CTOiNDOP.js";import"./useListState-BAjJAzhK.js";import"./Tag-zgCf0ON5.js";import"./useHighlightSelectionDescription-B4r42f8s.js";import"./useUpdateEffect-BI9jQu1K.js";import"./useHasTabbableChild-bXJ5y0cn.js";import"./chevron-down-DffAgSdq.js";import"./Virtualizer-D3Fh1CIP.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
