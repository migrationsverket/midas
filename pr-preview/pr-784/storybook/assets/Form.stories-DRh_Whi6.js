import{j as n}from"./iframe-Dx8ehMbR.js";import{$ as j}from"./Form-DbxK4QLL.js";import{G}from"./Grid-DSAPnLBs.js";import{G as e}from"./GridItem-CwCdIQyp.js";import{T as r}from"./TextField-CYJZhOBr.js";import{S as I}from"./Select-DHdFF4lh.js";import{B as a}from"./Button-BvqlIcRl.js";import{R as g,a as b}from"./Radio-DOcozqsp.js";import{C as h}from"./CheckboxGroup-CqZ-RR_u.js";import{C as k}from"./Checkbox-DZT3JRQa.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-B8l8B-G7.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BktB4A5F.js";import"./useFocusRing-By0JUaeZ.js";import"./index-CRVJ1NxM.js";import"./index-BDGwkvRr.js";import"./TextFieldBase-CakOC_Bt.js";import"./TextField-aNvCZ0fn.js";import"./FieldError-BqlBA4rd.js";import"./Text-BKL8tHbp.js";import"./Text-B_7jGWPQ.js";import"./ListKeyboardDelegate-B2R_VZRZ.js";import"./SelectionManager-DOpFZRXJ.js";import"./useEvent-C8j1_W-Z.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DsSLL20q.js";import"./useDescription-DjkPNcmF.js";import"./useControlledState-CXBSIc1v.js";import"./Group-B86975K8.js";import"./Input-o8MSV_xA.js";import"./Hidden-Dfxjjkft.js";import"./Button-BOcK3Qmt.js";import"./useLabels-BkcrTPX4.js";import"./useButton-oI1T-Oqr.js";import"./useTextField-Dgru9-Si.js";import"./useField-DiDebhWr.js";import"./TextField.module-8oYDuXgF.js";import"./Label-CRVWn_8B.js";import"./Dialog-C3-YUHnW.js";import"./RSPContexts-CvojT9N8.js";import"./OverlayArrow-D3p2sLNN.js";import"./useResizeObserver-Wj4e16AE.js";import"./Collection-DavLgsdQ.js";import"./index-NlBEwblR.js";import"./Separator-DMhuhKAG.js";import"./PressResponder-DZDsy6fq.js";import"./useLocalizedStringFormatter-Dl3GA7gB.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-Cc1iPTYn.js";import"./Dialog-BY5rnEan.js";import"./useLocalizedStringFormatter-D9xQb1XZ.js";import"./x-CpiBkvdQ.js";import"./createLucideIcon-Dpdlh6dH.js";import"./Heading-CvuDRysJ.js";import"./info-PJLYZh5p.js";import"./Tag-a6tbvJRr.js";import"./ListBox-lzGB9qQ9.js";import"./DragAndDrop-BXvTvQ5y.js";import"./inertValue-CRNXDnsW.js";import"./useListState-S3KCM2_5.js";import"./useHighlightSelectionDescription-9ZGiLvT0.js";import"./useUpdateEffect-Be4gVRmM.js";import"./useHasTabbableChild-CXPwoKEX.js";import"./check-CZAJz9tc.js";import"./ListBoxSection-OSg4w2Ij.js";import"./Virtualizer-L5HMqLjy.js";import"./useObserveElement-D09OyNoq.js";import"./chevron-down-IA54KbTa.js";import"./Button.module-GuOSDIYz.js";import"./useToggleState-KjEf5U2Z.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
