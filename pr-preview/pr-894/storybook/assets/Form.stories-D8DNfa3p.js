import{j as n}from"./iframe-eh8mAhOf.js";import{$ as j}from"./Form-CDds-Bj4.js";import{G}from"./Grid-Cso0GX7n.js";import{G as e}from"./GridItem-CmUC8Qjj.js";import{T as r}from"./TextField-BWpLCpUX.js";import{S as I}from"./Select-NoDma90-.js";import{B as a}from"./Button-CpOhuMOv.js";import{R as g,a as b}from"./Radio-D8SR3eWJ.js";import{C as h}from"./CheckboxGroup-BCLm_LFz.js";import{C as k}from"./Checkbox-Nvh1b5c7.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BjmDDRvF.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C4j2GoCB.js";import"./useFocusRing-EcsuLChJ.js";import"./index-BsAkrju0.js";import"./index-ecooH8O-.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DkEKpiwq.js";import"./TextField-C6ZHOpQi.js";import"./FieldError-CO2PlciQ.js";import"./Text-DCmHA0AH.js";import"./Text-Cp05J34U.js";import"./RSPContexts-B0INV8jV.js";import"./Group-Dp6JruQW.js";import"./Input-BXHKxkGC.js";import"./Hidden-BCl-ioj7.js";import"./Button-3YRCwqOe.js";import"./useLabels-BCKar6O9.js";import"./useButton-BHUcWVvH.js";import"./useTextField-B5-fQnO0.js";import"./useControlledState-CF9t1Cna.js";import"./useField-CYDhLsS5.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-fUtlUI5B.js";import"./Dialog-TgZtXY3Y.js";import"./OverlayArrow-CGHPwURA.js";import"./useResizeObserver-DJD9T9HS.js";import"./Collection-CiWoburO.js";import"./index-NAn2M6w_.js";import"./Separator-DuyHv74D.js";import"./SelectionManager-B6O0uCjd.js";import"./useEvent-DTSMQPYE.js";import"./scrollIntoView-B9q54VOH.js";import"./SelectionIndicator-CDGT2L0H.js";import"./useDescription-ZLqideCZ.js";import"./ListKeyboardDelegate-Xw-9_8qy.js";import"./PressResponder-BkYzL76t.js";import"./useLocalizedStringFormatter-L9Wi1Mww.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-D3sGm4CX.js";import"./VisuallyHidden-Ch-bS_Gj.js";import"./useLocalizedStringFormatter-CYFVGbBQ.js";import"./x-C1Xy0cyP.js";import"./createLucideIcon-DJMrtjwR.js";import"./Heading-InAs9hZ9.js";import"./info-D-gtNfGb.js";import"./Popover-3RMk5JQp.js";import"./Tag-DIY1Auw9.js";import"./ListBox-BfGKkxxu.js";import"./DragAndDrop-DPGlMlET.js";import"./inertValue-Yp7MTZpo.js";import"./useListState-D_wf_4yF.js";import"./useHighlightSelectionDescription-BO6JKO0f.js";import"./useUpdateEffect-BTNwkFMG.js";import"./useHasTabbableChild-D909QZpt.js";import"./check-I6NiCysh.js";import"./ListBoxSection-B586nLA-.js";import"./Virtualizer-CKtGlFSK.js";import"./chevron-down-BjElEtaH.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-lg_G6vOq.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
