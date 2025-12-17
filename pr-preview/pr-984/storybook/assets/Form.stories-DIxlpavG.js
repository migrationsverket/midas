import{j as e}from"./iframe-CQ_fy_EY.js";import{$ as c}from"./Form-CtV0_kwz.js";import{G as d}from"./Grid-CqE0Eo9I.js";import{G as i}from"./GridItem-D43S1avu.js";import{T as t}from"./TextField-DVyNHwGK.js";import{S as l}from"./Select-7nyhZJvc.js";import{B as a}from"./Button-DtIQcLuH.js";import{R as x,a as u}from"./Radio-BeUk93sX.js";import{C as I}from"./CheckboxGroup-DFLWGlsl.js";import{C as G}from"./Checkbox-CrFne-TJ.js";import{L as p}from"./ListBoxItem-BD-Gp4RO.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C7l7LqzK.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BjmZbY_Y.js";import"./useFocusRing-CBjwNCjA.js";import"./index-BJJvraYt.js";import"./index-DXn3pDe8.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Cn0M3o7d.js";import"./TextField-YbeQ5y3l.js";import"./FieldError-DMdpyDE1.js";import"./Text-CW8LcNQ6.js";import"./Text-hjykNwCE.js";import"./RSPContexts-DAW1b0Sd.js";import"./Group-pF654sQo.js";import"./Input-DNKeCYoK.js";import"./Hidden-CzYLxqKr.js";import"./Button-B89jYYjE.js";import"./useLabels-DWjvmaBB.js";import"./useButton-BeUorQOe.js";import"./useTextField-DXBBu2fJ.js";import"./useControlledState-CnAeDNgw.js";import"./useField-D5CRbrEp.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-DgUZ9rTR.js";import"./Dialog-CfxKv9MS.js";import"./OverlayArrow-9MzEcXEe.js";import"./useResizeObserver-BDNmCi4G.js";import"./Collection-BWjNYup_.js";import"./index-DXR6CGk_.js";import"./Separator-Cr1bOOHp.js";import"./SelectionManager-DQ4P_f_Z.js";import"./useEvent-gT9bYXp3.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DE6Qn6Zk.js";import"./useDescription-Be4J1cHA.js";import"./ListKeyboardDelegate-BW52_6s5.js";import"./PressResponder-D2dq6e46.js";import"./useLocalizedStringFormatter-C29QY5VX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Df-Y-aE1.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DxPMhaND.js";import"./x-2XBO8L6F.js";import"./createLucideIcon-mqgaB7OL.js";import"./useLocalizedStringFormatter-BTlSi4nT.js";import"./Heading-jrsyU3L3.js";import"./info-qcmNe9XL.js";import"./Popover-wXoN8svd.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C4PtznWb.js";import"./DragAndDrop-B2luBUpE.js";import"./inertValue-DUMFV9_3.js";import"./useListState-Dn_yMDpI.js";import"./Tag-B2yFiQX4.js";import"./useHighlightSelectionDescription-D1ngn1OB.js";import"./useUpdateEffect-Admi8phe.js";import"./useHasTabbableChild-CvMXR_rq.js";import"./chevron-down-2emMvEbc.js";import"./Button.module-Co5e5YHp.js";import"./check-DJvkl7BT.js";import"./useToggleState-BJ7DbZKs.js";import"./Virtualizer-CK7Mjob2.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
