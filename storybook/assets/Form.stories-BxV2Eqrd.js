import{j as e}from"./iframe-Dl_ZEAw_.js";import{$ as c}from"./Form-Pc85qXYh.js";import{G as d}from"./Grid-6NIA-tIp.js";import{G as i}from"./GridItem-DmOnG2o_.js";import{a as x,R as u}from"./Radio-CnFYe7Zt.js";import{C as I}from"./CheckboxGroup-EJT7gUzv.js";import{C as G}from"./Checkbox-BUr_oqk-.js";import{T as t}from"./TextField-BK4jnoc_.js";import{S as l}from"./Select-Bw7rx2NJ.js";import{L as p}from"./ListBoxItem-ChF-12NS.js";import{B as a}from"./Button-COrJAjql.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-qArlt3QR.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-vxZMHFxu.js";import"./useFocusRing-BadRLYOI.js";import"./index-BBK-ahHU.js";import"./index-9pBu4mcS.js";import"./clsx-Ciqy0D92.js";import"./Group-DboOVmDu.js";import"./FieldError-UQabDpKY.js";import"./Text-CFgDWcau.js";import"./Text-LOlP3muv.js";import"./Button-Bhf2TykO.js";import"./Hidden-I_e1q7UG.js";import"./useLabels-CH32VCLn.js";import"./useButton-CgsE8t_H.js";import"./SelectionIndicator-BqabxLAl.js";import"./useField-DyugcTbx.js";import"./VisuallyHidden-kMLlKce4.js";import"./useControlledState-BBjZ-p-J.js";import"./Label-C1MZzlub.js";import"./Dialog-CZxCBWib.js";import"./RSPContexts-H1zv-_Zf.js";import"./OverlayArrow-CcD4Fo11.js";import"./useResizeObserver-DA_A696h.js";import"./Collection-DH0CocWE.js";import"./index-CLGNexvb.js";import"./Separator-C0uzKyW4.js";import"./SelectionManager-kDqWfjBV.js";import"./useEvent-BKVERzXX.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-_k4XNsw_.js";import"./ListKeyboardDelegate-DxE_0iuR.js";import"./PressResponder-D7N53MSk.js";import"./useLocalizedStringFormatter-CZjhQNpd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CxIx03pf.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-BXfpE1Va.js";import"./createLucideIcon-xHw9Gsln.js";import"./useLocalizedStringFormatter-DU3dXRGP.js";import"./Heading-1v9YPZX2.js";import"./info-CC-RdadS.js";import"./Popover-Df9ufV0W.js";import"./check-CDzIu9a4.js";import"./useToggleState-CT8KEKji.js";import"./TextFieldBase-r1oxrnxq.js";import"./TextField-CBPqaRvd.js";import"./Input-ZlSfxA6e.js";import"./useTextField-DWfHNTEK.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DGnQQ37D.js";import"./DragAndDrop-NU-xUlOl.js";import"./inertValue-cyJWMpBd.js";import"./useListState-AFwtcyV1.js";import"./Tag-DneJlOTa.js";import"./useHighlightSelectionDescription-DbwlNb86.js";import"./useUpdateEffect-D2H4fgNL.js";import"./useHasTabbableChild-Dev67yPS.js";import"./chevron-down-qbE6sCIG.js";import"./Virtualizer-Cvcv07wa.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
