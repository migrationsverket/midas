import{j as e}from"./iframe-DLG9UKPd.js";import{$ as c}from"./Form-DM08mJyW.js";import{G as d}from"./Grid-yXUzgGDo.js";import{G as i}from"./GridItem-5BhQ_8yH.js";import{T as t}from"./TextField-VxjgyUws.js";import{S as l}from"./Select-C3aE9I5j.js";import{B as a}from"./Button-BSBQeMEK.js";import{R as x,a as u}from"./Radio-3H__PbMg.js";import{C as I}from"./CheckboxGroup-BS2JfGwS.js";import{C as G}from"./Checkbox-C6quzD6P.js";import{L as p}from"./ListBoxItem-CnZdE6Oe.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DBUuZCdW.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DMkWfSjQ.js";import"./useFocusRing-CPajt0l2.js";import"./index-BfkNjs9H.js";import"./index-Dhh4UqYu.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BNywrL7D.js";import"./TextField-s1mnnBVa.js";import"./FieldError-crXTrtj0.js";import"./Text-BSfpdnWo.js";import"./Text-RyRTgpJt.js";import"./RSPContexts-B1mSspvQ.js";import"./Group-CWaYRlj-.js";import"./Input-BLbmkuZd.js";import"./Hidden-BrEjSDmZ.js";import"./Button-TurWYA_F.js";import"./useLabels-Bt1wH29Q.js";import"./useButton-DVAUhmi8.js";import"./useTextField-Co9_Q0hz.js";import"./useControlledState-DKvDtRay.js";import"./useField-BIKHvwdL.js";import"./TextField.module-1fNSVGjT.js";import"./Label-B3SkrlHm.js";import"./Dialog-HPYNLG1w.js";import"./OverlayArrow-C7NIMeCm.js";import"./useResizeObserver-Bj0of0Zm.js";import"./Collection-D7DCZQ7p.js";import"./index-BkR-K3nJ.js";import"./Separator-C51Xr8n7.js";import"./SelectionManager-Cs0Oc9Y9.js";import"./useEvent-B9M_w_TJ.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-_XobMEGX.js";import"./useDescription-CNKvzn77.js";import"./ListKeyboardDelegate-CAHUNpaI.js";import"./PressResponder-sF-hqXVX.js";import"./useLocalizedStringFormatter-DIbN7jUK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D2z5fIdw.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CqsIInob.js";import"./x-Cu5S1DSw.js";import"./createLucideIcon-BPNvabKa.js";import"./useLocalizedStringFormatter-BgfRRBj_.js";import"./Heading-Dnzz1pkx.js";import"./info-BwUjhGZU.js";import"./Popover-Cfoyvvnu.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-kq1IG269.js";import"./DragAndDrop-DROK-5RQ.js";import"./inertValue-Dg--08ZG.js";import"./useListState-FHsoANfF.js";import"./Tag-NuGOXVZn.js";import"./useHighlightSelectionDescription-CfXBZPcx.js";import"./useUpdateEffect-DzFth_IX.js";import"./useHasTabbableChild-B8ePmxIH.js";import"./chevron-down-szqeE0Tx.js";import"./Button.module-Co5e5YHp.js";import"./check-DPXEDnf6.js";import"./useToggleState-rZiiUv1g.js";import"./Virtualizer-C_CZHdXs.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
