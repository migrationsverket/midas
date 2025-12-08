import{j as e}from"./iframe-DLM7OJJC.js";import{$ as c}from"./Form-CYp4zRoP.js";import{G as d}from"./Grid-C9Zq9Iqj.js";import{G as i}from"./GridItem-Sy-FzJpU.js";import{T as t}from"./TextField-C0xGsubE.js";import{S as l}from"./Select-Cc8ap5L4.js";import{B as a}from"./Button-D3MIvMYJ.js";import{R as x,a as u}from"./Radio-M0fgeTqS.js";import{C as I}from"./CheckboxGroup-Ff-xas8z.js";import{C as G}from"./Checkbox-CDIe08bK.js";import{L as p}from"./ListBoxItem-BerbT9xq.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cg8VeQnF.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-A4eZ-XSk.js";import"./useFocusRing-BfFb_8Xs.js";import"./index-C6cGHGyr.js";import"./index-VUDeKwzR.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-yitY069t.js";import"./TextField-CKf_o07w.js";import"./FieldError-CwZhaUl8.js";import"./Text-Dr_1HWjJ.js";import"./Text-DWcHOJVH.js";import"./RSPContexts-BjmElr_9.js";import"./Group-R3eIeMzU.js";import"./Input-DK2j63DH.js";import"./Hidden-sRnIF3aJ.js";import"./Button-CBWZM7hn.js";import"./useLabels-vojnNhU5.js";import"./useButton-CFLlN0xE.js";import"./useTextField-CM634RkI.js";import"./useControlledState-B4ZGdE6T.js";import"./useField-BqYJVQFT.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-CPsclgEs.js";import"./Dialog-BlN1z6y9.js";import"./OverlayArrow-D70KZkbQ.js";import"./useResizeObserver-DpEoFmLb.js";import"./Collection-BwFjuWWy.js";import"./index-Dluxzn8c.js";import"./Separator-D2iQC7Vu.js";import"./SelectionManager-B96WbDoz.js";import"./useEvent-CsCU74as.js";import"./scrollIntoView-DcUPLUcg.js";import"./SelectionIndicator-C5yvm9jm.js";import"./useDescription-BJBYRQLH.js";import"./ListKeyboardDelegate-xtVCS6J0.js";import"./PressResponder-C-bnnjQE.js";import"./useLocalizedStringFormatter-De_gwEZD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DonKrAv1.js";import"./VisuallyHidden-CvL4kn3L.js";import"./x-BrX8Cp6W.js";import"./createLucideIcon-5PLI4glS.js";import"./useLocalizedStringFormatter-DZBSwjU5.js";import"./Heading-CDL9YwFd.js";import"./info-RHSRw1L2.js";import"./Popover-CHu-QnWJ.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CfIQgat4.js";import"./DragAndDrop-Cu1BqTsd.js";import"./inertValue-ByodY0QU.js";import"./useListState-S74JedFf.js";import"./Tag-B7tSb-nY.js";import"./useHighlightSelectionDescription-BVUr2f1m.js";import"./useUpdateEffect-btjWIVk9.js";import"./useHasTabbableChild-B67vRbQ-.js";import"./chevron-down-ChVsNXRp.js";import"./Button.module-Co5e5YHp.js";import"./check-DLCSAxgi.js";import"./useToggleState-DHclQ8z3.js";import"./Virtualizer-BVl3Xuh6.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
