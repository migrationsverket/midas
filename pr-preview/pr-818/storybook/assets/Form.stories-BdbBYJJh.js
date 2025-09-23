import{j as n}from"./iframe-Iof4BHCv.js";import{$ as j}from"./Form-B7H73Dbr.js";import{G}from"./Grid-DX9MPb7S.js";import{G as e}from"./GridItem-P5SZiG3C.js";import{T as r}from"./TextField-BkgXk3jg.js";import{S as I}from"./Select-B8Gw44n9.js";import{B as a}from"./Button-CZIhED1U.js";import{R as g,a as b}from"./Radio-C4YS7NhK.js";import{C as h}from"./CheckboxGroup-BUoPXlKb.js";import{C as k}from"./Checkbox-C0Gw7XDw.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-D-sqiXg9.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Bw0_t78f.js";import"./useFocusRing-Slqf7zfs.js";import"./index-CGKRSw1M.js";import"./index-CmpNdnZT.js";import"./TextFieldBase-vAUy37dQ.js";import"./TextField-BO0K4YIW.js";import"./FieldError-BevS9-g-.js";import"./Text-CHHV36v3.js";import"./Text-uQY0c0hH.js";import"./ListKeyboardDelegate-ByGWYhMP.js";import"./SelectionManager-Dpx3luoG.js";import"./useEvent-DQcJIPOM.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-xvtIELvs.js";import"./useDescription-reKouz2Y.js";import"./useControlledState-nZ-8Ecqw.js";import"./Group-BLV7RcA5.js";import"./Input-DYXYxDvJ.js";import"./Hidden-5BcF1N8H.js";import"./Button-DU30oxjI.js";import"./useLabels-DA_CNzbM.js";import"./useButton-BO5Bx4Rf.js";import"./useTextField-jBwd-dpm.js";import"./useField-XqTiyoOh.js";import"./TextField.module-DjUItNl5.js";import"./Label-C8JipImp.js";import"./Dialog-DrkiMsqe.js";import"./RSPContexts-DrstICtm.js";import"./OverlayArrow-BiWA1hxd.js";import"./useResizeObserver-Dl3LphT2.js";import"./Collection-Djt9cxkY.js";import"./index-9-IpcHqU.js";import"./Separator-DhQcZ68_.js";import"./PressResponder-Cbi17dH7.js";import"./useLocalizedStringFormatter-CX_Jgvws.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-D9Yk5Scg.js";import"./Dialog-B0p0KtnM.js";import"./useLocalizedStringFormatter-DNKUhDtR.js";import"./x-BLMS0eer.js";import"./createLucideIcon-CWr7Be8u.js";import"./Heading-pFJT5erh.js";import"./info-5a5PAhhu.js";import"./Tag-NVDSSLAQ.js";import"./ListBox-CqAwoOou.js";import"./DragAndDrop-1zB-cJbZ.js";import"./inertValue-DIvMY8zC.js";import"./useListState-DzWZGuyc.js";import"./useHighlightSelectionDescription-hD_IGy8I.js";import"./useUpdateEffect-C-kPlqzU.js";import"./useHasTabbableChild-nxuzdrcg.js";import"./check-CZ0Xa5FL.js";import"./ListBoxSection-Ra-JS_-g.js";import"./Virtualizer-DiptPsFE.js";import"./useObserveElement-CXmjh9rt.js";import"./chevron-down-rj5eSjQu.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-Cxz8X5qV.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
