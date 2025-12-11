import{j as e}from"./iframe-MGON9gUz.js";import{$ as c}from"./Form-Ci2nHO7K.js";import{G as d}from"./Grid-CQwC_dv6.js";import{G as i}from"./GridItem--fD9Exyi.js";import{T as t}from"./TextField-D3mSPYWB.js";import{S as l}from"./Select--wpj5w1E.js";import{B as a}from"./Button-DNm7fuyT.js";import{R as x,a as u}from"./Radio-Xw7SULku.js";import{C as I}from"./CheckboxGroup-kCRk09Oe.js";import{C as G}from"./Checkbox-CD19efRh.js";import{L as p}from"./ListBoxItem-C0PxtKYQ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cnlzp-5B.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CZH_3WXB.js";import"./useFocusRing-ThBX_ucU.js";import"./index-BPAmBu_k.js";import"./index-FW1sGAw2.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BEgZMkh9.js";import"./TextField-D7bLX3gu.js";import"./FieldError-CsJWXBCg.js";import"./Text-BnvHdZmH.js";import"./Text-DHFOFPOF.js";import"./RSPContexts-DiOGMsFy.js";import"./Group-B_6MZ3Vu.js";import"./Input-B3ykKLs1.js";import"./Hidden-jd2R-Bfn.js";import"./Button-C2E3oR8W.js";import"./useLabels-DAFPofHN.js";import"./useButton-CZwmHtQP.js";import"./useTextField-DXjNuDpM.js";import"./useControlledState-C7UrvEAm.js";import"./useField-C76vj-yl.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-gm1JNqP4.js";import"./Dialog-BrzWZnQe.js";import"./OverlayArrow-Dmhyf4LC.js";import"./useResizeObserver-F9CbnyyZ.js";import"./Collection-CgIZiDbJ.js";import"./index-Dg1lkKLe.js";import"./Separator-CP41aAQz.js";import"./SelectionManager-CHMOCq5V.js";import"./useEvent-evFt6shW.js";import"./scrollIntoView-_LxBK19Y.js";import"./SelectionIndicator-BmZs-tIK.js";import"./useDescription-BsxXVwWM.js";import"./ListKeyboardDelegate-9cFfA3kh.js";import"./PressResponder-qcUnRIyW.js";import"./useLocalizedStringFormatter-Dk_lEJbs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D8-cmg2g.js";import"./VisuallyHidden-Dsp0-A_8.js";import"./x-rFaeoGAX.js";import"./createLucideIcon-CxLXd6bS.js";import"./useLocalizedStringFormatter-CcmqV3-4.js";import"./Heading-Dq2fb95l.js";import"./info-DPgceM7J.js";import"./Popover-Bc13iog4.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-0WQcm0Sy.js";import"./DragAndDrop-D3nvY8oX.js";import"./inertValue-BXskKuO2.js";import"./useListState-BZZOezT2.js";import"./Tag-DLH20vAO.js";import"./useHighlightSelectionDescription-3bVta8Pk.js";import"./useUpdateEffect-g34eltEc.js";import"./useHasTabbableChild-B6oSlEv6.js";import"./chevron-down-C_4Vvs90.js";import"./Button.module-Co5e5YHp.js";import"./check-CIdXJKZW.js";import"./useToggleState-BuYZwrJV.js";import"./Virtualizer-CGJWwKsX.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
