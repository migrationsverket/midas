import{j as e}from"./iframe-BCu1NNFI.js";import{$ as c}from"./Form-Dzub4ZCL.js";import{G as d}from"./Grid-Mx5rFPUF.js";import{G as i}from"./GridItem-CoKoHAqb.js";import{T as t}from"./TextField-Dyv-eBxO.js";import{S as l}from"./Select-CP8Q0l1N.js";import{B as a}from"./Button-D-exP_iM.js";import{R as x,a as u}from"./Radio-Cl3doYYS.js";import{C as I}from"./CheckboxGroup-BF6jkLqD.js";import{C as G}from"./Checkbox-ECpasRug.js";import{L as p}from"./ListBoxItem-6cIPtL1K.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-fj1shBHC.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BEqNihOK.js";import"./useFocusRing-Bi2l9BeF.js";import"./index-BORhhh-V.js";import"./index-pb47Dny1.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CzZcdcxh.js";import"./TextField-RAAB0HYD.js";import"./FieldError-D_bX0XbT.js";import"./Text-CSC27xRH.js";import"./Text-DIEFoepW.js";import"./RSPContexts-DJXEp2S5.js";import"./Group-BcFfFs4F.js";import"./Input-Bpp6YJWC.js";import"./Hidden-CM3Yk7lA.js";import"./Button-vp3BXzyW.js";import"./useLabels-Ck0jGj4V.js";import"./useButton-tpmepzyq.js";import"./useTextField-CZxZ8w_2.js";import"./useControlledState-Dejsun2t.js";import"./useField-DIMoLOh1.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Di-e5hF1.js";import"./Dialog-D6q0lrqi.js";import"./OverlayArrow-odf6ZOFz.js";import"./useResizeObserver-DGcL359J.js";import"./Collection-DrnD_mb9.js";import"./index-A6fGDA3Y.js";import"./Separator-CVPTInOe.js";import"./SelectionManager-NLv3mXy-.js";import"./useEvent-CklH_3Xl.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DgLJ-CM6.js";import"./useDescription-BP344jV7.js";import"./ListKeyboardDelegate-CL7x_221.js";import"./PressResponder-DOQmugY8.js";import"./useLocalizedStringFormatter-BQINCQnu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BJ2pAY63.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BUlrvxyt.js";import"./x-C6-boS8J.js";import"./createLucideIcon-B5Es93Ur.js";import"./useLocalizedStringFormatter-DO5bmpoD.js";import"./Heading-CHeMvKF_.js";import"./info-CDa19jTp.js";import"./Popover-8Cinnvn1.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D-kDFmST.js";import"./DragAndDrop-JQh1hkG6.js";import"./inertValue-jrVM2mXj.js";import"./useListState-C3EhVscO.js";import"./Tag-BVtDDwKM.js";import"./useHighlightSelectionDescription-PNkI-KoM.js";import"./useUpdateEffect-9Ma-jQ7m.js";import"./useHasTabbableChild-DWr7PAsf.js";import"./chevron-down-Bjngttpi.js";import"./Button.module-CIvIJ45H.js";import"./check-B4ey84A2.js";import"./useToggleState-BFMAy9xG.js";import"./Virtualizer-ezkufVDu.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
