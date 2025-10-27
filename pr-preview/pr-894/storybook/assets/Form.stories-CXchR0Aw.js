import{j as n}from"./iframe-typ1V0IQ.js";import{$ as j}from"./Form-BpBTRdAr.js";import{G}from"./Grid-CwQOc1Oz.js";import{G as e}from"./GridItem-7rBE2L_P.js";import{T as r}from"./TextField-BUaek1Bx.js";import{S as I}from"./Select-C7l7-_N2.js";import{B as a}from"./Button-wlqf824N.js";import{R as g,a as b}from"./Radio-CMjRFaNP.js";import{C as h}from"./CheckboxGroup-cjmVRUQy.js";import{C as k}from"./Checkbox-BnIKrhtW.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BT_rnNQI.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CgVWVVA1.js";import"./useFocusRing-CeFnKk5l.js";import"./index-DGdf5RSs.js";import"./index-DKZzq6Wh.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-ad2kF6Ox.js";import"./TextField-4vUDoczx.js";import"./FieldError-DuT6Q-pN.js";import"./Text-k1GXm9bm.js";import"./Text-Bfx44VR7.js";import"./RSPContexts-kOKvhF6V.js";import"./Group-D497hztp.js";import"./Input-DNmti4z0.js";import"./Hidden-BMRt_srx.js";import"./Button-DlOEJL2A.js";import"./useLabels-DX-GE65t.js";import"./useButton-Dq0CoZq_.js";import"./useTextField-C-9Mc3kD.js";import"./useControlledState-CS6DPp37.js";import"./useField-D7X-t6Kh.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-DR0kRBtT.js";import"./Dialog-MjzGRM_C.js";import"./OverlayArrow-9x1ga5qc.js";import"./useResizeObserver-CW_8bgM5.js";import"./Collection-BPAtr1ms.js";import"./index-DsX2XX74.js";import"./Separator-LVjmWgQg.js";import"./SelectionManager-CZHCuALk.js";import"./useEvent-BeGDLmoD.js";import"./scrollIntoView-EQQ99LMb.js";import"./SelectionIndicator-CS-O2nM9.js";import"./useDescription-CyXXGEUY.js";import"./ListKeyboardDelegate-DmQnfFAA.js";import"./PressResponder-NTgbuSrI.js";import"./useLocalizedStringFormatter-CwZqSzqd.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-3F_UOTO8.js";import"./VisuallyHidden-D1hn3oMd.js";import"./useLocalizedStringFormatter-DAHM5WHo.js";import"./x-D3bREpit.js";import"./createLucideIcon-DmGEKPD0.js";import"./Heading-DvMoKEnQ.js";import"./info-DaYPWZ_i.js";import"./Popover-DFM1XHyN.js";import"./Tag-BI4reJca.js";import"./ListBox-CUaESaiX.js";import"./DragAndDrop-CZ8CjzaK.js";import"./inertValue-BApaz8bo.js";import"./useListState-ChlyboZm.js";import"./useHighlightSelectionDescription-DUdEAg-1.js";import"./useUpdateEffect-C18fti5Z.js";import"./useHasTabbableChild-CLujCcjK.js";import"./check-Bc_sY6WW.js";import"./ListBoxSection-CFhnP4mW.js";import"./Virtualizer-Cz_f9yvM.js";import"./chevron-down-B23u9azD.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-DaWGAT2S.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
