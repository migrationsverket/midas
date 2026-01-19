import{j as e}from"./iframe-CdV99NDU.js";import{$ as c}from"./Form-CAqYEDpD.js";import{G as d}from"./Grid-CdsyUrvJ.js";import{G as i}from"./GridItem-U2C7kBxk.js";import{T as t}from"./TextField-CkqmdZ0F.js";import{S as l}from"./Select-C9hWbrsC.js";import{B as a}from"./Button-Dfhqrxs-.js";import{R as x,a as u}from"./Radio-Cs6G3GQB.js";import{C as I}from"./CheckboxGroup-BKScXh9Q.js";import{C as G}from"./Checkbox-BBjbUG52.js";import{L as p}from"./ListBoxItem-Dz2Cf2G0.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CMfRIaXv.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-KDukGO29.js";import"./useFocusRing-e9aHRU6a.js";import"./index-BzgysReL.js";import"./index-yHLZSSmE.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DerDHHhj.js";import"./TextField-QXxxNz3d.js";import"./FieldError-CzkKIm6d.js";import"./Text-DrXygMM2.js";import"./Text-C43rwyi-.js";import"./RSPContexts-aiXnIDGZ.js";import"./Group-JJhUuNns.js";import"./Input-C9YU2iUD.js";import"./Hidden-B5huBJsQ.js";import"./Button-pO8fiD1O.js";import"./useLabels-BD260d70.js";import"./useButton-KkSusS_w.js";import"./useTextField-CAf1i9nO.js";import"./useControlledState-RbaACq8P.js";import"./useField-CYefFohu.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CDwmSx2A.js";import"./Dialog-CYr1tOJW.js";import"./OverlayArrow-DfWMMDPB.js";import"./useResizeObserver-Cbv0FbJp.js";import"./Collection-DqZyFB69.js";import"./index-p-XLETit.js";import"./Separator-CMc22emk.js";import"./SelectionManager-DHJky9qJ.js";import"./useEvent-CUH_UTTo.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DcarU12u.js";import"./useDescription-CMkoGRwr.js";import"./ListKeyboardDelegate-C05_rVzA.js";import"./PressResponder-CAYXo6yN.js";import"./useLocalizedStringFormatter-Bp1Nt6ma.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-_Bxr_lht.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B5phWBq7.js";import"./x-BA1eIH_o.js";import"./createLucideIcon-B6F2wH1H.js";import"./useLocalizedStringFormatter-Dbxw2dmh.js";import"./Heading-CJMyDpVX.js";import"./info-B3aMcGeP.js";import"./Popover-C6fv9dIY.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C8_kamW7.js";import"./DragAndDrop-DZChp8R3.js";import"./inertValue-D3fK3ice.js";import"./useListState-B-KiPI4v.js";import"./Tag-C4nJEjtq.js";import"./useHighlightSelectionDescription-Xlc3kQQq.js";import"./useUpdateEffect-vOVr9AbN.js";import"./useHasTabbableChild-CpDV1b1A.js";import"./chevron-down-CdAqJ_cq.js";import"./Button.module-Co5e5YHp.js";import"./check-Dgz6O7pt.js";import"./useToggleState-DKz-0Ski.js";import"./Virtualizer-Doh4ve22.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
