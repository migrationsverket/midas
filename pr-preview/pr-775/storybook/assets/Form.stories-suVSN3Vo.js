import{j as n}from"./iframe-CnW43MuE.js";import{$ as j}from"./Form-DZ9l4NP0.js";import{G}from"./Grid-DA-i2Uzv.js";import{G as e}from"./GridItem-CtpCalov.js";import{T as r}from"./TextField-zo6tkG-k.js";import{S as I}from"./Select-DOSRRUzm.js";import{B as a}from"./Button-4AZfAJSA.js";import{R as g,a as b}from"./Radio-D-HKcBJw.js";import{C as h}from"./CheckboxGroup-BTEpmLw4.js";import{C as k}from"./Checkbox-Dq9UVe6f.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CDh3IXPm.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Dvmuf0zU.js";import"./useFocusRing-DfZqOB5T.js";import"./index-RpIXIjNA.js";import"./index-rI6S0pbX.js";import"./TextFieldBase-BsSFGluO.js";import"./TextField-CIjj8iG5.js";import"./FieldError-Bum_nd74.js";import"./Text-DhCR7THI.js";import"./Text-CnlEW4aV.js";import"./ListKeyboardDelegate-ClUEzykS.js";import"./SelectionManager-Hh6E3HGF.js";import"./useEvent-pY76Fhao.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BptRAY9C.js";import"./useDescription-D3cJgtwi.js";import"./useControlledState-BjBzTgX4.js";import"./Group-BgNG0Oft.js";import"./Input-P4U8jzGN.js";import"./Hidden-D571qcEi.js";import"./Button-DgtwRZj5.js";import"./useLabels-DjoFP8Ym.js";import"./useButton-CclF28HT.js";import"./useTextField-LZ-FyEFH.js";import"./useField-C6XC1TFv.js";import"./TextField.module-BrIGiDQC.js";import"./Label-Ccu_CWL2.js";import"./Dialog-Bc0F4ERm.js";import"./RSPContexts-GKC2zpQA.js";import"./OverlayArrow-D9HLabx0.js";import"./useResizeObserver-DnibDwaS.js";import"./Collection-Clv5PWhx.js";import"./index-Me61rRYx.js";import"./Separator-B0zbKz74.js";import"./PressResponder-DRIkY8pU.js";import"./useLocalizedStringFormatter-DAweVc8h.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-C29esixt.js";import"./Dialog-DX1dApmu.js";import"./useLocalizedStringFormatter-cqAZh75W.js";import"./x-DekgyfUe.js";import"./createLucideIcon-BDt8mWCF.js";import"./Heading-DtpR-Alx.js";import"./info-BZOSYY7o.js";import"./Tag-nSiPXXpm.js";import"./ListBox-COANLiou.js";import"./DragAndDrop-DJlx3CMH.js";import"./inertValue-CAY8XZVn.js";import"./useListState-Bsahpwm9.js";import"./useHighlightSelectionDescription-BEdYswQk.js";import"./useUpdateEffect-CfoWn3Rv.js";import"./useHasTabbableChild-CKErdykl.js";import"./check-CZXs6P_7.js";import"./ListBoxSection-BxGyDtqY.js";import"./Virtualizer-DaG9KNkg.js";import"./useObserveElement-CFTTVEEd.js";import"./chevron-down-MCt7GsDY.js";import"./Button.module-CF2bVDCq.js";import"./useToggleState-MpDgamif.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
